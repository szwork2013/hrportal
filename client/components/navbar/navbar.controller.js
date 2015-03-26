'use strict';

angular.module('hrportalApp')
    .controller('NavbarCtrl', function($rootScope, $scope, $location, Auth, $http, menuList, sfApi) {
        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.$on("user_loaded", function(event, user) {
            //console.log(user);
            $rootScope.sfUser = "(sf details : " + user.firstName + ", " + user.lastName + ")";
        });

        $scope.logout = function() {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });
