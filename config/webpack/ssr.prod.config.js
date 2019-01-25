/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WorkboxWebpackPlugin = require('workbox-webpack-plugin');
var merge = require('webpack-merge');

var path = require('path');
var paths = require('./paths');

var ssrServerConfig = require('./config-fragments/ssr-server.config.js');
var ssrWebappConfig = require('./config-fragments/ssr-webapp.config.js');

var prodConfig = require('./config-fragments/prod.config.js');

var VARS =  require('../vars.js');
/* eslint-enable */

module.exports = [
  ssrServerConfig,
  merge(ssrWebappConfig, {
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.src, 'index.prod.template.html'),
        filename: 'server.html',
      }),
      new WorkboxWebpackPlugin.GenerateSW({
        swDest: (process.env.SERVICE_WORKER_FILE_NAME || VARS.DEFAULT_SERVICE_WORKER_FILE_NAME) + '.js', // eslint-disable-line prefer-template
        clientsClaim: true,
        skipWaiting: true,
        directoryIndex: 'server.html',
      }),
    ],
  }, prodConfig),
];
