'use strict';

//
// Expose default showcase pagelet.
//
require('pagelet').extend({
  css: 'css.styl',
  view: 'view.hbs',

  data: {},

  get: function get(render) {
    render(null, this.data);
  }
}).on(module);