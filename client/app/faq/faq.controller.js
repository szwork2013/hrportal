'use strict';

angular.module('hrportalApp').controller('FaqCtrl', function($scope, Auth, $location, $http, $sanitize) {
	$scope.user = {};
	$scope.errors = {};

	$http.get('api/faq/').
	success(function(data, status, headers, config) {

		$scope.isCollapsed = true;
		$scope.isLoggedIn = Auth.isLoggedIn;
		$scope.isAdmin = Auth.isAdmin;
		$scope.getCurrentUser = Auth.getCurrentUser;
		$scope.faqs = data;
		
	}).
	error(function(data, status, headers, config) {
		console.log("plantage");
	});

});