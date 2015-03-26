'use strict';

angular.module('hrportalApp')
    .controller('MainCtrl', function($scope, sfApi) {
        $scope.todos = [];

        sfApi.todo();

        $scope.$on("todo_loaded", function(event, todos) {
            //console.log(todos);
            $scope.todos = todos;
        });

    });
