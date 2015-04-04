'use strict';

require('pagelet').extend({
  view: 'view.hbs',
  css: 'base.styl',

  data: {
    year: new Date().getUTCFullYear()
  },

  get: function get(render) {
    render(null, this.data);
  }
}).on(module);