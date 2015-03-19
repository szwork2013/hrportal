'use strict';

angular.module('hrportalApp')
.controller('LoginCtrl', function ($scope, Auth, $location, sfApi) {
  $scope.user = {};
  $scope.errors = {};

  $scope.login = function(form) {
    $scope.submitted = true;

    if(form.$valid) {
      Auth.login({
        email: $scope.user.email,
        password: $scope.user.password
      })
      .then( function() {
          // Logged in, redirect to home
          
          $location.path('/');
        })
      .catch( function(err) {
        $scope.errors.other = err.message;
      });
    }
  };

});

angular.module('hrportalApp')
.controller('SfLoginCtrl', function ($scope, Auth, $location) {
  $scope.user = {};
  $scope.errors = {};
  console.log("SF Controller");
  $scope.submitted = true;

  Auth.sflogin();


});
