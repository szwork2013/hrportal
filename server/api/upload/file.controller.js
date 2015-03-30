/**
/**
 * Using Rails-like standard naming convention for endpoints.
 * POST     /upload              ->  index
 */

 'use strict';

 var _ = require('lodash');
 var File = require('./file.model');
 var formidable = require('formidable');
 var util = require('util');

// Get list of things
exports.index = function(req, res) {
	//req.setBodyEncoding('binary');

	var form = new formidable.IncomingForm();
	form.uploadDir = "/Users/mikaeltuitel/www/hrportal/upload/";
	form.keepExtensions = true;

	form.parse(req, function(err, fields, files) {
		//res.writeHead(200, {'content-type': 'text/plain'});
		//res.write('received upload:\n\n');
		//res.end(util.inspect({fields: fields, files: files}));

		return res.json({fields: fields, files: files});
	});

	return;
};

function handleError(res, err) {
	return res.send(500, err);
}
