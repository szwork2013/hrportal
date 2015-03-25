'use strict';

angular.module('hrportalApp').factory('Page', function($resource) {
  return $resource('api/pages', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});