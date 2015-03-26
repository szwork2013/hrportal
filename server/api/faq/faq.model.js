'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FaqSchema = new Schema({
  question: String,
  answer: String,
  created : { type: Date, default: Date.now },
  active: Boolean
});

module.exports = mongoose.model('Faq', FaqSchema);