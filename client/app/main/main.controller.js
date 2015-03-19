'use strict';

angular.module('hrportalApp')
.controller('MainCtrl', function ($scope, $http, socket, sfApi) {
  $scope.awesomeThings = [];
  $scope.todos = [];
  $scope.reqs = [];

  sfApi.todo().success(function(data, status, headers, config) {
    angular.forEach(data.content.d.results, function(todoCat, key) {
      $scope.todos.push(todoCat);
    });
  });

  sfApi.jobReqs().success(function(data, status, headers, config) {
    console.log(data);
    angular.forEach(data.content.d.results, function(reqs, key) {
      $scope.reqs.push(reqs);
    });
  });

  $http.get('/api/things').success(function(awesomeThings) {
    $scope.awesomeThings = awesomeThings;
    socket.syncUpdates('thing', $scope.awesomeThings);
  });

  $scope.addThing = function() {
    if($scope.newThing === '') {
      return;
    }
    $http.post('/api/things', { name: $scope.newThing });
    $scope.newThing = '';
  };

  $scope.deleteThing = function(thing) {
    $http.delete('/api/things/' + thing._id);
  };

  $scope.$on('$destroy', function () {
    socket.unsyncUpdates('thing');
  });
});
