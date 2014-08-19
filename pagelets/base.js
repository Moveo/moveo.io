'use strict';

var BigPipe = require('bigpipe')
  , path = require('path');

//
// Expose default highlight pagelet.
//
exports.highlight = BigPipe.Pagelet.extend({
  css: [path.join(__dirname, 'highlight/css.styl')],
  view: path.join(__dirname, 'highlight/view.hbs'),

  data: {},

  get: function get(render) {
    render(null, this.data);
  }
});

//
// Expose default showcase pagelet.
//
exports.showcase = BigPipe.Pagelet.extend({
  css: [path.join(__dirname, 'showcase/css.styl')],
  view: path.join(__dirname, 'showcase/view.hbs'),

  data: {},

  get: function get(render) {
    render(null, this.data);
  }
});