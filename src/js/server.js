import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import express from 'express';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from 'store';
import getServerHtml from '../index.html.js';
import App from 'views/App';

// Load SCSS
import 'index.scss';

const app = express();
const hostname = 'localhost';
const port = 8080;

// ENV
const IS_DEVELOPMENT = app.get('env') === 'development';

// Disabling "Powered by" headers
app.disable('x-powered-by');

// Telling server to serve our client app build as static assets
app.use('/client', express.static('build/client'));

async function sendResponse(req, res, store) {
  let matched_component;

  // Check matching of request url with defined routes and get the csomponent
  for (let key in routes) {
    const route = routes[key];
    const match = matchPath(req.url, { path: route.path, exact: true });

    if (match) {
      matched_component = route.component;
    }
  }

  matched_component = matched_component || {};

  if (!matched_component.fetchData) {
    matched_component.fetchData = () => new Promise(resolve => resolve());
  }

  // Fetch async data
  await matched_component.fetchData({ store });

  // Dehydrates the state
  const preloadedState = JSON.stringify(store.getState());

  // Context is passed to the StaticRouter and it will attach data to it directly
  const context = {};

  // Before sending the request app is rendered to a string
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={ store }>
      <StaticRouter location={ req.url } context={ context }>
        <App />
      </StaticRouter>
    </Provider>
  );

  // Get Helmet data from components
  const helmetData = Helmet.renderStatic();

  // Adds rest of the HTML page
  const serverHtml = getServerHtml(appHtml, preloadedState, helmetData);

  // Context has url, which means `<Redirect>` was rendered somewhere
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // Send pre-rendered HTML as 200 response
    res.status(context.status || 200).send(serverHtml);
  }
}

function handleRequest(req, res) {
  // Creates empty store for each request
  const config = configureStore();
  sendResponse(req, res, config.store);
}

// All other routes
app.use(handleRequest);

// Error handling
app.use((error, req, res) => {
  res.status(error.status || 500);

  res.render('error', {
    message: error.message,
    // Display stack trace only in development mode
    error: IS_DEVELOPMENT ? error : null,
  });
});

// Start listening
app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`\n★★ Listening on port ${ port }. Open up http://${ hostname }:${ port }/ in your browser.\n`);
  }
});
