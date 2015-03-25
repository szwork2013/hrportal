'use strict';

angular.module('hrportalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('/recruiting', {
        url: '/recruiting',
        templateUrl: 'app/recruiting/recruiting.html',
        controller: 'RecruitingCtrl',
        authenticate: true
      });
  });