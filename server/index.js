import 'babel-polyfill';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware'; // eslint-disable-line import/no-extraneous-dependencies
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'; // eslint-disable-line import/no-extraneous-dependencies

import clientConfig from '../webpack/client.dev';
import serverConfig from '../webpack/server.dev';
import { findVideos, findVideo } from './api';
import db from './mysql/mysql';

const DEV = process.env.NODE_ENV === 'development';
const { publicPath } = clientConfig.output;
const outputPath = clientConfig.output.path;
const app = express();

app.use(compression());
app.use(express.static('public'));

// JWTOKEN COOKIE - in a real app obviously you set this after signup/login:
app.use(cookieParser());

app.use((req, res, next) => {
  const cookie = req.cookies.jwToken;
  const jwToken = 'real'; // TRY: set to 'real' to authenticate ADMIN route

  if (cookie !== jwToken) {
    res.cookie('jwToken', jwToken, { maxAge: 900000 });
    req.cookies.jwToken = jwToken;
  }

  next();
});

// API

app.get('/abouttable', (req, res) => {
  const sql = 'CREATE TABLE about(title VARCHAR(255), text TEXT)';
  db.query(sql, (error, result) => {
    if(error) throw error;
    console.log(result);
    res.send('About table created...');
  });
});

app.get('/api/update/about', (req, res) => {
  const about = {
    title: 'Par mani2',
    text: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eos eum ex ipsa nostrum possimus repudiandae, totam veniam veritatis! A ad adipisci aliquam amet, aperiam aspernatur commodi culpa delectus dignissimos dolorum ea eos eum facilis hic impedit inventore ipsam iste laborum minima mollitia nam nihil, nobis omnis optio pariatur perspiciatis quae qui quos repudiandae rerum saepe sint, sit soluta unde veniam vero vitae. Asperiores corporis omnis provident quo repellendus veritatis!',
  };

  const sql = `UPDATE about SET
    title = '${about.title}',
    text = '${about.text}'
    WHERE id = 1`;
  db.query(sql, (error, result) => {
    if(error) throw error;
    console.log(result);
    res.send('About changed');
  });
});

app.get('/api/get/about', (req, res) => {
  const sql = 'SELECT * FROM about';
  db.query(sql, (error, result) => {
    if(error) throw error;
    console.log(result);
    res.json(result[0]);
  });
});

app.get('/api/videos/:category', async (req, res) => {
  const jwToken = req.headers.authorization.split(' ')[1];
  const data = await findVideos(req.params.category, jwToken);
  res.json(data);
});

app.get('/api/video/:slug', async (req, res) => {
  const jwToken = req.headers.authorization.split(' ')[1];
  const data = await findVideo(req.params.slug, jwToken);
  res.json(data);
});

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
  const serverRender = require('../buildServer/main.js').default; // eslint-disable-line import/no-unresolved, global-require

  app.use(publicPath, express.static(outputPath));
  app.use(serverRender({ clientStats, outputPath }));
}

app.listen(3000, () => {
  console.log('Listening @ http://localhost:3000/'); // eslint-disable-line no-console
});
