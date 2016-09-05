'use strict';

angular.module('bookings')
    .directive('navigation', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../../views/navigation.html',
            controller: 'NavigationController',
        };
    });