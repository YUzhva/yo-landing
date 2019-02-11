/* eslint-disable */
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');
var paths = require('./paths');
/* eslint-enable */

module.exports = {
  output: {
    filename: 'dist/scripts.[hash].js',
    chunkFilename: 'dist/chunk.[chunkhash].js',
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
    // Create a vendors chunk, which includes all code from node_modules in the whole application.
    // https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-2
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all',
    //     },
    //   },
    // },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dist/styles.[hash].css',
    }),
    new CopyWebpackPlugin([
      { from: path.join(paths.src, 'static') },
    ]),
  ],
};
