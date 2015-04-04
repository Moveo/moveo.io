'use strict';

require('pagelet').extend({
  css: 'css.styl',
  view: 'view.hbs',

  data: {
    links: [{
      text: 'Products',
      link: '#products'
    }, {
      text: 'Services',
      link: '#services'
    }, {
      text: 'Blog',
      link: '#blog'
    }, {
      text: 'Contact',
      link: '#contact'
    }]
  },

  get: function get(render) {
    render(null, this.data);
  }
}).on(module);