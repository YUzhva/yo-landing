/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WorkboxWebpackPlugin = require('workbox-webpack-plugin');
var WebpackPwaManifest = require('webpack-pwa-manifest');
var ManifestPlugin = require('webpack-manifest-plugin');
var merge = require('webpack-merge');

var path = require('path');
var paths = require('./paths');

var csrWebappConfig = require('./config-fragments/csr-webapp.config.js');

var prodConfig = require('./config-fragments/prod.config.js');

var VARS =  require('../vars.js');
/* eslint-enable */

module.exports = merge(csrWebappConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.prod.template.html'),
      favicon: path.join(paths.src, 'media', 'favicon.png'),
      minify: true,
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: (process.env.SERVICE_WORKER_FILE_NAME || VARS.DEFAULT_SERVICE_WORKER_FILE_NAME) + '.js', // eslint-disable-line prefer-template
      clientsClaim: true,
      skipWaiting: true,
    }),
    new ManifestPlugin({
      fileName: 'assets-manifest.json',
    }),
    new WebpackPwaManifest({
      name: 'YO! mates',
      short_name: 'YO! mates',
      description: 'We build awesome products with the power of user-friendly Design and scalable Front-end architecture.',
      background_color: '#ffce00',
      theme_color: '#ffce00',
      start_url: '/',
      icons: [
        {
          src: path.join(paths.src, 'media', 'favicon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: 'dist/assets/icons-pwa',
        },
      ],
    }),
  ],
}, prodConfig);
