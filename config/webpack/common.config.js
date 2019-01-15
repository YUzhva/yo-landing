require('dotenv').config();

/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

var babelConfig = require('../../babel.config');
var VARS =  require('../vars.js');

var rootPath = path.join(__dirname, '..', '..');
var srcPath = path.join(rootPath, 'src');
/* eslint-enable */

module.exports = {
  mode: JSON.stringify(process.env.NODE_ENV),
  entry: [
    '@babel/polyfill',
    path.join(srcPath, 'main.js'),
    path.join(srcPath, 'styles', 'main.scss'),
  ],
  output: {
    path: path.join(rootPath, 'public'),
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: babelConfig,
      }, {
        test: /\.(svg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'dist/assets/images/',
            },
          },
        ],
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'dist/assets/fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        GOOGLE_ANALYTICS_TRACKING_ID: JSON.stringify(process.env.GOOGLE_ANALYTICS_TRACKING_ID),
        CRISP_WEBSITE_ID: JSON.stringify(process.env.CRISP_WEBSITE_ID),
        SERVICE_WORKER_FILE_NAME: JSON.stringify(
          process.env.SERVICE_WORKER_FILE_NAME || VARS.DEFAULT_SERVICE_WORKER_FILE_NAME,
        ),
      },
    }),
  ],
  resolve: {
    modules: [srcPath, 'node_modules'],
  },
};
