// Invoke 'strict' JavaScript mode
'use strict';

angular.module('courses').factory('Courses', ['$resource',function($resource) {
    return $resource('api/courses/:courseId', {courseId: '@_id'}, {update: {method: 'PUT'}});
}]);