'use strict';

var BigPipe = require('BigPipe');

//
// Expose default highlight pagelet.
//
exports.highlight = BigPipe.pagelet.extend({
  css: 'highlight.styl',
  view: 'highlight.hbs',

  data: {
    background: '',
    message: 'Web development'
  },

  get: function get(render) {
    render(null, this.data);
  }
}).on(module);

//
// Expose default showcase pagelet.
//
exports.showcase = BigPipe.pagelet.extend({
  css: 'showcase.styl',
  view: 'showcase.hbs',

  data: {
    message: 'Web development'
  },

  get: function get(render) {
    render(null, this.data);
  }
}).on(module);