// Invoke 'strict' JavaScript mode
'use strict';

angular.module('songs').factory('Songs', ['$resource',function($resource) {
    return $resource('api/songs/:songId', {songId: '@_id'}, {update: {method: 'PUT'}});
}]);