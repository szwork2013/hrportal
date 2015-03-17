'use strict';

var express = require('express');
var controller = require('./page.controller');
var auth = require('../../auth/auth.service');
var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.get('/find/**', auth.isAuthenticated(), controller.find);
router.get('/enfants/:id', controller.children);
router.get('/parents/:id', controller.parents);

module.exports = router;