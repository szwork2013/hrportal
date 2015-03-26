/**
/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /pages              ->  index
 */

'use strict';

var _ = require('lodash');
var request = require('request');
var http = require('http');

var soap = require('soap');
var Cookie = require('soap-cookie');

// Get list of things
exports.index = function(req, res) {

    var sessionId = null;
    var url = 'https://salesdemo4.successfactors.com:443/sfapi/v1/soap?wsdl';
    var args = {
        credential: {
            companyId: 'acejmw',
            username: 'admin',
            password: 'Arago0000'
        }
    };
    soap.createClient(url, function(err, client) {
        client.login(args, function(err, result) {

        	client.setSecurity(new Cookie(client.lastResponseHeaders));

            sessionId = result;
            //
            var args2 = {

                queryString: 'SELECT title,extTitle,country,jobCode,jobLevel,costCenterId,department,jobStartDate,recruiterName,status, jobReqTemplateId From JobRequisition$1251'

            };
            client.query(args2, function(err, result2) {
                //console.log(result2);
                res.json(result2);
            });


           
        });
    });


};
