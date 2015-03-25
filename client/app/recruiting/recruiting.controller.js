'use strict';

angular.module('hrportalApp').controller('RecruitingCtrl', function($scope, Auth, $location, $http, $sanitize) {
    $scope.user = {};
    $scope.errors = {};

    $http.get('api/recruiting/').
    success(function(data, status, headers, config) {

        $scope.recruitingList = data.result.sfobject;
        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;
    }).
    error(function(data, status, headers, config) {
        console.log("plantage");
    });
});
