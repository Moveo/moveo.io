'use strict';

var path = require('path')
  , BigPipe = require('bigpipe')
  , serveStatic = require('serve-static')
  , serveFavicon = require('serve-favicon')
  , debug = require('debug')('moveo:bigpipe')
  , port = process.env.PORT || 8080;

//
// Initialise the BigPipe server.
//
var pipe = BigPipe.createServer(port, {
  dist: path.join(__dirname, 'dist'),
  pages: [
    BigPipe.Page.extend({
      view: 'views/main.hbs',
      pagelets: 'pagelets',
      dependencies: [
        'base/css.styl'
      ]
    }).on(module)
  ]
});

//
// Add middleware.
//
pipe
  .before(serveStatic(path.join(__dirname, 'public')))
  .before(serveFavicon(path.join(__dirname, 'public', 'favicon.png')));

//
// Listen for errors and the listen event.
//
pipe.on('error', function error(err) {
  debug('Server received an error: %s', err.message);
});

pipe.once('listening', function listening() {
  debug('Moveo.io is running on http://localhost:%d', port);
});