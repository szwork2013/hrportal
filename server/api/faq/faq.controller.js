/**
/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /pages              ->  index
 */

'use strict';

var _ = require('lodash');
var Faq = require('./faq.model');

// Get list of things
exports.index = function(req, res) {
    Faq.find({}, function(err, things) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, things);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
