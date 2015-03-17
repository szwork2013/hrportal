'use strict';

angular.module('hrportalApp')
.controller('NavbarCtrl', function ($scope, $location, Auth, $http, menuList, sfApi) {
  $scope.isCollapsed = true;
  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;
  $scope.getCurrentUser = Auth.getCurrentUser;
  
  sfApi.me.query(function(data, status, headers, config) {
      console.log(data);
    })

  menuList.menu.
    success(function(data, status, headers, config) {
      $scope.menu = data;
    }).
    error(function(data, status, headers, config) {
      console.log("plantage");
    });

  $scope.logout = function() {
    Auth.logout();
    $location.path('/login');
  };

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});