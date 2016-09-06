'use strict';

angular.module('bookings')
    .directive('dateInterval', dateIntervelDirective);
    
    function dateIntervelDirective(){
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            bindToController: {
                startDate: "=",
                endDate: "="
            },
            controller: "DateIntervalController",
            controllerAs: "interval",
            templateUrl: '../../views/dateInterval.html'
        };
    }
    
