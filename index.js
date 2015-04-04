'use strict';

var debug = require('diagnostics')('moveo')
  , serveFavicon = require('serve-favicon')
  , serveStatic = require('serve-static')
  , BigPipe = require('bigpipe')
  , Pagelet = require('pagelet')
  , path = require('path')
  , bigpipe;

//
// Initialise the BigPipe server.
//
bigpipe = BigPipe.createServer(process.env.PORT || 8080, {
  dist: path.join(__dirname, 'dist'),

  //
  // Single webpage design, simply respond to all GET requests on /
  //
  pagelets: {
    base: Pagelet.extend({
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
  }
});

//
// Add middleware.
//
bigpipe
  .middleware.use(serveStatic(path.join(__dirname, 'public')))
  .middleware.use(serveFavicon(path.join(__dirname, 'public', 'favicon.png')));

//
// Listen for errors and the listen event.
//
bigpipe.on('error', function error(err) {
  debug('Server received an error: %s', err.message);
});

bigpipe.once('listening', function listening() {
  debug('Moveo.io is running on %j', this.server.address());
});