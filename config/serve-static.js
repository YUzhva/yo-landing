require('dotenv').config();

/* eslint-disable */
var express = require('express');
var proxy = require('http-proxy-middleware');
var path = require('path');

var proxyConfig = require('./proxy');

var VARS =  require('./vars.js');

var app = express();
var port = process.env.PORT || 3000;
/* eslint-enable */

app.use(express.static('public', { maxAge: VARS.MILLISECONDS_IN_ONE_DAY * 90 }));

// get all path wich is not starts from api
app.get(/^\/+(?!api)/, (req, res) => (
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
));

app.use('/api', proxy(proxyConfig['/api/']));
app.use('/api-local', proxy(proxyConfig['/api-local/']));

app.listen(port, () => console.log(`App listening on port ${port}!`));
