'use strict';

angular.module('hrportalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('/page', {
        url: '/page/{path:.*}',
        templateUrl: 'app/page/create/page.html',
        controller: 'PageCtrl',
        authenticate: true
      });
  });