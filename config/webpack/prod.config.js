/* eslint-disable */
var merge = require('webpack-merge');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var path = require('path');

var common = require('./common.config.js');

var rootPath = path.join(__dirname, '..', '..');
var srcPath = path.join(rootPath, 'src');
/* eslint-enable */

module.exports = merge(common, {
  output: {
    filename: 'dist/scripts.[hash].js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(srcPath, 'index.prod.template.html') }),
    new MiniCssExtractPlugin({
      filename: 'dist/styles.[hash].css',
    }),
  ],
});
