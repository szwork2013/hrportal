'use strict';

angular.module('hrportalApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('/page/new', { //state for adding a new movie
                url: '/page/new',
                templateUrl: 'app/page/create/page.html',
                controller: 'PageCreateCtrl'
            })
            .state('/page', {
                url: '/page/{path:.*}',
                templateUrl: 'app/page/view/page.html',
                controller: 'PageCtrl',
                authenticate: true
            });
    });
