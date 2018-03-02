/* eslint-disable consistent-return */
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import configureStore from './configureStore';
import Layout from '../src/06-components/03-layout';

const createApp = (App, store) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ({ clientStats, outputPath }) => async (req, res) => {
  const store = await configureStore(req, res);
  if (!store) return; // no store means redirect was already served

  const app = createApp(Layout, store);
  const appString = ReactDOM.renderToString(app);
  const stateJson = JSON.stringify(store.getState());
  const chunkNames = flushChunkNames();
  const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });

  console.log('REQUESTED PATH:', req.path); // eslint-disable-line no-console
  console.log('CHUNK NAMES', chunkNames); // eslint-disable-line no-console
  console.log('outputPath', outputPath); // eslint-disable-line no-console

  return res.send(`<!doctype html>
    <html lang="lv">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="format-detection" content="telephone=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
        
        <title>Raivis Bružis - vakara vadītājs</title>
        
        ${styles}
        
        <!--link to the most important font which gets requested as soon as possible.
        this decreases possibility of flash of unstyled text.-->
        <link rel="preload" href="/fonts/subset-Roboto-Regular.woff2" as="font" type="font/woff2" crossorigin>
        
        <!--link to most important favicons-->
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16">
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#444444">
        
        <!--theme color-->
        <meta name="theme-color" content="#444444">
        
        <!--link to manifest-->
        <link rel="manifest" href="/manifest/manifest.json">
        
        <!--This service loads only the polyfills the browser needs-->
        <script src="//cdn.polyfill.io/v2/polyfill.min.js"></script>
      </head>
      <body>
        <script>window.REDUX_STATE = ${stateJson}</script>
        <div id="root" class="root">${appString}</div>
        ${cssHash}
        <script type='text/javascript' src='/static/vendor.js'></script>
        ${js}
      </body>
    </html>`);
};
