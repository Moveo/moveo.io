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

  //
  // Single webpage design, simply respond to all GET requests on /
  //
  pagelets: [
    BigPipe.Pagelet.extend({
      path: '/',
      view: 'views/main.hbs',
      pagelets: 'pagelets',
      dependencies: [
        '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
        '//fonts.googleapis.com/css?family=Montserrat:400,700',
        '//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css',
        'bower_components/normalize-css/normalize.css',
        'base/grid.css',
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