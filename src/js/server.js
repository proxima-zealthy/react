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

const ManifestFileJSON = require('../../build/manifest.json');

// Load SCSS
import 'index.scss';

const app = express();
const hostname = 'localhost';
const port = 8080;

// ENV
const IS_DEVELOPMENT = app.get('env') === 'development';


const outputFiles = { js: [], css: [] }; // In DEVELOPMENT mode, 'css' won't be extracted as separate chunk

// Can be used to preload other set of assets as per chunk
Object.keys(ManifestFileJSON).map(asset => {
  if (asset.indexOf('.js') > -1) {
    outputFiles.js.push(ManifestFileJSON[asset]);
  } else if (asset.indexOf('.css') > -1) {
    outputFiles.css.push(ManifestFileJSON[asset]);
  }
});

if (IS_DEVELOPMENT) {
  outputFiles.css.push('/client/style.css'); // Not able to share seed data between server and client manifestplugin
}

// Disabling "Powered by" headers
app.disable('x-powered-by');

// Telling server to serve our client app build as static assets
app.use('/client', express.static('build/client'));

async function sendResponse(req, res, store) {
  let matchRoute;

  /*
  * 1. Check matching of request url with defined routes and get the csomponent
  * */
  for (let key in routes) {
    const route = routes[key];
    const match = matchPath(req.url, { path: route.path, exact: false });

    if (match) {
      matchRoute = {
        component: route.component,
        params: match.params
      };
    }
  }

  matchRoute.component = matchRoute.component || {};

  /*
  * 2. Fetch Data (static fetchData) if exist, otherwise dummy promise
  * */
  if (!matchRoute.component.fetchData) {
    matchRoute.component.fetchData = () => new Promise(resolve => resolve());
  }

  // Fetch async data (which is stored in redux store)
  await matchRoute.component.fetchData({ store, params: matchRoute.params });

  /*
  * 3. Get this data from store and prepare initial State for FE
  * */

  // Dehydrates the state
  const preloadedState = JSON.stringify(store.getState());


  /*
  * 4. Prepare corresponding HTML of the matched route
  * */

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

  /*
  * 5. Prepare SEO data from rendered component above
  * */
  // Get Helmet data from components
  const helmetData = Helmet.renderStatic();

  /*
  * 6. Pass above html, initialState, SEO data and JS-CSS script files into Template(index.html.js)
  * */
  const serverHtml = getServerHtml(appHtml, preloadedState, helmetData, outputFiles);


  /*
  * 7. Send above prepared things to FE
  * */

  // Context has url, which means `<Redirect>` was rendered somewhere
  if (context.url) {
    res.redirect(302, context.url);
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
