/**
/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /pages              ->  index
 */

'use strict';

var _ = require('lodash');
var Page = require('./page.model');

// Get list of things
exports.index = function(req, res) {
  Page.find({}, 'name slug', function (err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};

// Get a single thing
exports.show = function(req, res) {
Page.findById(req.params.id, function (err, page) {
    if(err) { return handleError(res, err); }
    if(!page) { return res.send(404); }
    return res.json(page);
  });
};


// Get children
exports.children = function(req, res) {
Page.findById(req.params.id,  function (err, page) {
    if(err) { return handleError(res, err); }
    if(!page) { return res.send(404); }
    page.getChildrenTree( {fields:'slug name', options:{sort:'_id'}} , function (err, p) {
    	if(err) { return handleError(res, err); }
    	if(!p) { return res.send(404); }
    	return res.json(p);
  	});
  });
};

// Get parent
exports.parents = function(req, res) {
Page.findById(req.params.id,  function (err, page) {
    if(err) { return handleError(res, err); }
    if(!page) { return res.send(404); }

    page.getAncestors(function (err, p) {
    	if(err) { return handleError(res, err); }
    	if(!p) { return res.send(404); }
    	return res.json(p);
  	});
    //return res.json(page);
  });
};

// Get page
exports.find = function(req, res) {
  var url =  req.params[0].split('/');
  Page.find({ 'slug' : url.slice(-1).pop()},  function (err, page) {
     if(err) { return handleError(res, err); }
     if(!page) { return res.send(404); }
     return res.json(page);
  });
  //return res.json(req.params);

};

function handleError(res, err) {
  return res.send(500, err);
}