'use strict';

angular.module('hrportalApp').factory('sfApi', function sfApiFactory($http, $resource) {

	var menu = null;
	var url = "";

	this.me = $resource("/odata/v2/User('admin')/directReports", { }, {
        query: {
            method: 'GET',
            isArray: false,
            headers: { 'Authorization': "Basic YWRtaW5AYWNlam13OkFyYWdvMDAwMA==" }
        }
    });
  return this;
});