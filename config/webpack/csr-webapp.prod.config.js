/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WorkboxWebpackPlugin = require('workbox-webpack-plugin');
var merge = require('webpack-merge');

var path = require('path');
var paths = require('./paths');

var csrWebappConfig = require('./config-fragments/csr-webapp.config.js');

var prodConfig = require('./config-fragments/prod.config.js');

var VARS =  require('../vars.js');
/* eslint-enable */

module.exports = merge(csrWebappConfig, prodConfig, {
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(paths.src, 'index.prod.template.html') }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: (process.env.SERVICE_WORKER_FILE_NAME || VARS.DEFAULT_SERVICE_WORKER_FILE_NAME) + '.js', // eslint-disable-line prefer-template
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
});
