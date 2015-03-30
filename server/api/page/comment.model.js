'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var Page = require('./page.model');

var CommentSchema = new Schema({ 
	_id :String, 
	content: String,
	author: String,
	views: Number,
	page_id: {
		$ref: Page,
		$id: ObjectId("500c680c1fe9193b67b898a3")
	},
	created : { type: Date, default: Date.now },
	updated : { type: Date, default: Date.now }
}, { autoIndex: true });

module.exports = mongoose.model('Comment', CommentSchema);