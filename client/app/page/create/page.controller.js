'use strict';

angular.module('hrportalApp').
controller('PageCreateCtrl', function($scope, $location, Page, menuList) {
    $scope.user = {};
    $scope.errors = {};

    $scope.page = new Page(); //create new movie instance. Properties will be set via ng-model on UI


    $scope.addPage = function() {

        $scope.page.$save(function() {
            console.log("save");
            menuList.update();
            $location.path('/');
        });

        console.log("new page");
    };
});
