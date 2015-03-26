'use strict';

angular.module('hrportalApp').factory('menuList', function menuListFactory($rootScope, $http) {

    var update = function() {
        $http.get('api/pages/enfants/0').
        success(function(data, status, headers, config) {
            $rootScope.$broadcast("menu_loaded", data);
            $rootScope.menu = data;
        }).
        error(function(data, status, headers, config) {
            console.log("plantage");
        });
    }

    this.update = update;

    update();

    return this;
});
