'use strict';

var express = require('express');
var controller = require('./file.controller');
var auth = require('../../auth/auth.service');
var router = express.Router();
var bd = require('body-parser');

//router.get('/', auth.isAuthenticated(), controller.index);
router.post('/', bd.raw(), controller.index);

module.exports = router;