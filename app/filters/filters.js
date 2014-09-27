define(['angular', 'services'], function (angular, services) {
	'use strict';

	/* Filters */
  
	angular.module('houndApp.filters', ['houndApp.services'])
		.filter('interpolate', ['version', function(version) {
			return function(text) {
				return String(text).replace(/\%VERSION\%/mg, version);
			};
	}]);
});
