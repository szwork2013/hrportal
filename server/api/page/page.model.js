'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var i18n = require('mongoose-multilang');
var tree = require('mongoose-path-tree');

var PageSchema = new Schema({ 
  _id :String, 
  name: String,
  slug: String,
  active: Boolean,
  category: String,
  content: String,
  image: String,
  author: String,
  views: Number,
  created : { type: Date, default: Date.now },
  updated : { type: Date, default: Date.now }
}, { autoIndex: true });

PageSchema.plugin(i18n, { index: true }); 
PageSchema.plugin(tree, {
  pathSeparator : '#',
  onDelete :      'REPARENT',
  numWorkers:     5,
  idType:         String
});

module.exports = mongoose.model('Page', PageSchema);