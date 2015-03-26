'use strict';

angular.module('hrportalApp').factory('sfApi', function sfApiFactory($rootScope, $http, Auth) {

    this.me = function() {
        $http.get("api/sf/User('" + Auth.getSfId() + "')?$select=lastName,firstName,userId&$key=" + Auth.getSfUser()).
        success(function(data, status, headers, config) {
            $rootScope.$broadcast("user_loaded", data.content.d);
        });
    }

    this.todo = function() {
        $http.get("api/sf/Todo?$orderby=categoryId%20desc&$key=" + Auth.getSfUser()).
        success(function(data, status, headers, config) {

            var todos = [];
            angular.forEach(data.content.d.results, function(todoCat, key) {
                todos.push(todoCat);
            });

            $rootScope.$broadcast("todo_loaded", todos);
        });
    }

    this.me();

    return this;
});
