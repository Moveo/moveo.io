'use strict';

var BigPipe = require('bigpipe');

//
// Expose default highlight pagelet.
//
exports.highlight = BigPipe.Pagelet.extend({
  css: 'highlight/css.styl',
  view: 'highlight/view.hbs',

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
exports.showcase = BigPipe.Pagelet.extend({
  css: 'showcase/css.styl',
  view: 'showcase/view.hbs',

  data: {
    message: 'Web development'
  },

  get: function get(render) {
    render(null, this.data);
  }
}).on(module);