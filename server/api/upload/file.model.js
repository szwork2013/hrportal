'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FileSchema = new Schema({
  name: String,
  url: String,
  created : { type: Date, default: Date.now }
});

module.exports = mongoose.model('File', FileSchema);