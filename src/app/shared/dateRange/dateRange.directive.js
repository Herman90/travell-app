(function(){
    'use strict';

    angular.module('bookings')
        .directive('dateInterval', DateRangeDirective);
        
        function DateRangeDirective(){
            return {
                restrict: 'AE',
                replace: true,
                scope: {},
                bindToController: {
                    startDate: "=",
                    endDate: "="
                },
                controller: DateRangeController,
                controllerAs: "range",
                templateUrl: '/app/shared/dateRange/dateRange.html'
            };
        }
        
        function DateRangeController(){
            this.minDate = new Date();
        }
})();

    
