'use strict';

var path = require('path')
  , BigPipe = require('bigpipe')
  , connect = require('connect')
  , debug = require('debug')('moveo:bigpipe')
  , port = process.env.PORT || 8080;

//
// Initialise the BigPipe server.
//
var pipe = BigPipe.createServer(port, {
  dist: __dirname + '/dist',
  pages: [
    BigPipe.Page.extend({
      view: __dirname + '/views/main.hbs',
      pagelets: __dirname + '/pagelets'
    })
  ]
});

//
// Add middleware.
//
pipe
  .before(connect.static(path.join(__dirname, 'public')))
  .before(connect.favicon(path.join(__dirname, 'public', 'favicon.png')));

//
// Listen for errors and the listen event.
//
pipe.on('error', function error(err) {
  debug('Server received an error: %s', err.message);
});

pipe.once('listening', function listening() {
  debug('Moveo.io is running on http://localhost:%d', port);
});