'use strict';

angular.module('bookings')
    .directive('dateinterval', function dateIntervelDirective(){
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: '../../views/dateInterval.html',
            link: function(scope, elem, attr){
                scope.minDate = new Date();
                scope.maxDate = (new Date()).setDate(scope.minDate.getDate() + 60);
            }
        };
    });
    
