'use strict';

angular.module('hrportalApp').factory('menuList', function menuListFactory($http) {

	this.menu = $http.get('api/pages/enfants/0');
	
	return this;
});