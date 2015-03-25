'use strict';

var express = require('express');
var controller = require('./recruiting.controller');
var auth = require('../../auth/auth.service');
var router = express.Router();

//router.get('/', auth.isAuthenticated(), controller.index);
router.get('/', controller.index);

module.exports = router;