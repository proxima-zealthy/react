import React from 'react';
import ReactDOMServer from 'react-dom/server';
import favicon from 'img/favicon.png';

const ServerHTML = ({ appHtml, initialData, helmet, outputFiles }) => (
  <html lang='en'>
  <head>
    <meta charSet='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0' />
    <link rel='shortcut icon' type='image/x-icon' href={favicon} />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />
    {/*<title>Amazing React SSR Boilerplate with SEO</title>*/}

    {helmet.title.toComponent()}
    {helmet.meta.toComponent()}
    {helmet.link.toComponent()}

    {
      outputFiles.css.map((sty, k) => (
        <link key={k} rel='stylesheet' href={sty} />
      ))
    }

  </head>
  <body>
  <div
    id='root'
    dangerouslySetInnerHTML={ { __html: appHtml } }
  />
  <script
    dangerouslySetInnerHTML={ { __html: `window.__PRELOADED_STATE__ = ${ JSON.stringify(initialData).replace(/>/g, '\\u003e').replace(/</g, '\\u003c') };` } }
  />
  {
    outputFiles.js.map((scr, k) => (
      <script key={k} type='text/javascript' src={scr} />
    ))
  }
  </body>
  </html>
);

const getServerHTML = (appHtml, preloadedState = null, helmet, outputFiles) => {
  return `<!doctype html>${ ReactDOMServer.renderToString(
    <ServerHTML appHtml={ appHtml } initialData={ preloadedState } helmet={helmet} outputFiles={outputFiles}/>
  ) }`;
};

export default getServerHTML;
