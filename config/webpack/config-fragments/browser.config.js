/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

var paths = require('./paths');

var VARS =  require('../../vars.js');
/* eslint-enable */

module.exports = {
  output: {
    path: path.join(paths.root, 'public'),
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
};
