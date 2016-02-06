var express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

global.__base = __dirname + '/'; //We create the global var __base to do the requires more easily.

var app = express();

// ALL ENVITORIMENTS
app.set('port', process.env.PORT || 3000);
//app.use(bodyParser({ type: 'application/*+json' }))

// CONTROLLERS
var main = require('./controllers/main');

// ROUTES
app.use(main);

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Homecheker working! on port "+app.get('port'));
});

module.exports = app;
