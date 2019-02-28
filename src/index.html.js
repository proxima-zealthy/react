import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { outputFiles } from '../webpack/output-files';
import favicon from 'img/favicon.png';

const ServerHTML = ({ appHtml, initialData, helmet }) => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0' />
      <link rel='shortcut icon' type='image/x-icon' href={favicon} />
      {/*<title>Amazing React SSR Boilerplate with SEO</title>*/}

      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}

      <link rel='stylesheet' href={ `/${ outputFiles.css }` } />
    </head>
    <body>
      <div
        id='root'
        dangerouslySetInnerHTML={ { __html: appHtml } }
      />
      <script
        dangerouslySetInnerHTML={ { __html: `window.__PRELOADED_STATE__ = ${ JSON.stringify(initialData).replace(/>/g, '\\u003e').replace(/</g, '\\u003c') };` } }
      />
      <script type='text/javascript' src={ `/${ outputFiles.vendor }` } />
      <script type='text/javascript' src={ `/${ outputFiles.client }` } />
    </body>
  </html>
);

const getServerHTML = (appHtml, preloadedState = null, helmet) => {
  return `<!doctype html>${ ReactDOMServer.renderToString(
    <ServerHTML appHtml={ appHtml } initialData={ preloadedState } helmet={helmet} />
  ) }`;
};

export default getServerHTML;
