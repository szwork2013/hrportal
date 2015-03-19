/**
/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /pages              ->  index
 */

 'use strict';

 var _ = require('lodash');
 var request = require('request');
 var http = require('http');

// Get list of things
exports.index = function(req, res) {

};

// Get a single thing
exports.call = function(req, result) {

	var reqURL = req.url;
	var key = "Basic " + req.query.$key;

	console.log(key);
	if(key != "Basic undefined"){
		http.get({
			hostname: 'localhost',
			port: 9000,
			path: "/odata/v2"+reqURL+"&$format=json",
			agent: false,
			headers:{
				"Authorization": key,
				'Content-Type': 'application/json'
			} 
		}, function (res) {
			var body = "";
			res.on('data', function(data) {
				body += data;
			});
			res.on('end', function() {
				return result.json({content: JSON.parse(body)});
			})
		//return res.json('bob');
	});
	}
};
