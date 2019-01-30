require('dotenv').config();

require('./global').init();

/* eslint-disable */
var express = require('express');
var proxy = require('http-proxy-middleware');
var path = require('path');
var fs = require('fs');
var compression = require('compression');

var proxyConfig = require('./proxy');

var app = express();
var port = process.env.PORT || 3000;

import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import ProvideServerReactApp from '../src/server';
/* eslint-enable */

app.use(compression());
app.use(express.static('public'));

// get all path wich is not starts from api
app.get(/^\/+(?!api)/, (req, res) => {
  fs.readFile(path.resolve('public', 'server.html'), 'utf8', (err, htmlData) => {
    // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/StaticRouter.md#context-object
    if (err) { return res.status(404).end(); }

    const context = {};
    const helmetContext = {};

    const stringifiedReactApp = ReactDOMServer.renderToString(
      ProvideServerReactApp(req.url, context, helmetContext),
    );

    const { helmet } = helmetContext;

    return res.send(
      htmlData
        .replace(/<title[^>]*>([^<]+)<\/title>/, helmet.title.toString())
        .replace(/<\/head>/, helmet.meta.toString() + '</head>') // eslint-disable-line prefer-template
        .replace(
          '<div id="yo-landing"></div>',
          `<div id="yo-landing">${stringifiedReactApp}</div>`,
        ),
    );
  });
});

app.use('/api', proxy(proxyConfig['/api/']));
app.use('/api-local', proxy(proxyConfig['/api-local/']));

Loadable.preloadReady().then(() => {
  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});
