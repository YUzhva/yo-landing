/* eslint-disable */
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');

var common = require('./common.config.js');

var rootPath = path.join(__dirname, '..', '..');
var srcPath = path.join(rootPath, 'src');
var proxyConfig = require('../proxy');
/* eslint-enable */

module.exports = merge(common, {
  output: {
    filename: 'dist/scripts.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: process.env.PORT || 8080,
    contentBase: rootPath,
    historyApiFallback: true,
    proxy: proxyConfig,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(srcPath, 'index.dev.template.html') }),
    new MiniCssExtractPlugin({
      filename: 'dist/styles.css',
    }),
  ],
});
