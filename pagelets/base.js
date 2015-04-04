'use strict';

var Pagelet = require('pagelet')
  , path = require('path');

//
// Expose default showcase pagelet.
//
exports.showcase = Pagelet.extend({
  css: path.join(__dirname, 'showcase/css.styl'),
  view: path.join(__dirname, 'showcase/view.hbs'),

  data: {},

  get: function get(render) {
    render(null, this.data);
  }
});