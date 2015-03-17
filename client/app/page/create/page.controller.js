'use strict';

angular.module('hrportalApp').controller('PageCtrl', function ($scope, Auth, $location, $http, $sanitize) {
  $scope.user = {};
  $scope.errors = {};


	$http.get('api/pages/find' + $location.path()).
	  success(function(data, status, headers, config) {
	  	if(data[0]){
	  		$scope._category = data[0].category;
	    	$scope._title = data[0].name;
	    	$scope._date = data[0].created;
	    	$scope._content = data[0].content;

	    	$scope.isCollapsed = true;
	    	$scope.isLoggedIn = Auth.isLoggedIn;
	    	$scope.isAdmin = Auth.isAdmin;
			$scope.getCurrentUser = Auth.getCurrentUser;
		}else{
			console.log("wrong params");
			$location.path('/');
		}	  
	}).
	  error(function(data, status, headers, config) {
	    console.log("plantage");
	  });
});