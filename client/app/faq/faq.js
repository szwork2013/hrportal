'use strict';

angular.module('hrportalApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('faq', {
                url: '/faq',
                templateUrl: 'app/faq/faq.html',
                authenticate: true
            });
    });
