import 'babel-polyfill';
import express from 'express';
import compression from 'compression';
import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'; // eslint-disable-line import/no-extraneous-dependencies

const DEV = process.env.NODE_ENV === 'development';

// WebPack config
const webpackPath = DEV ? '../webpack/' : '../../webpack/';
const clientConfig = require(`${webpackPath}client.dev`);
const serverConfig = require(`${webpackPath}server.dev`);

const { publicPath } = clientConfig.output;
const outputPath = clientConfig.output.path;
const app = express();

// Compression
app.use(compression());

// Static folder
app.use(express.static('static'));

// UNIVERSAL HMR + STATS HANDLING GOODNESS:
if (DEV) {
  const multiCompiler = webpack([clientConfig, serverConfig]);
  const clientCompiler = multiCompiler.compilers[0];

  app.use(webpackDevMiddleware(multiCompiler, { publicPath }));
  app.use(webpackHotMiddleware(clientCompiler));

  // keeps serverRender updated with arg: { clientStats, outputPath }
  app.use(webpackHotServerMiddleware(multiCompiler, {
    serverRendererOptions: { outputPath },
  }));
} else {
  const clientStats = require('../buildClient/stats.json'); // eslint-disable-line import/no-unresolved, global-require
  const serverRender = require('./main.js').default; // eslint-disable-line import/no-unresolved, global-require

  app.use(publicPath, express.static(outputPath));
  app.use(serverRender({ clientStats, outputPath }));
}

app.listen(3000, () => {
  console.log('Listening @ http://localhost:3000/'); // eslint-disable-line no-console
});
