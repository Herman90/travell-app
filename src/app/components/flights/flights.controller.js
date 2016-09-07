(function(){
    'use strict';
    
    angular.module('bookings')
        .controller('FlightsController', ['SearchService', flightsController]);
    
    function flightsController(searchService){
        var vm = this;
        
        vm.flight = {};
        
        vm.search = function(isValid){
            if(isValid){
                searchService.searchForFlight(vm.flight.departure, vm.flight.arrival, vm.flight.interval.startDate, vm.flight.interval.endDate);
            }
        }
        
        vm.reset = function(){
            vm.flight = {};
        }
    }
})();