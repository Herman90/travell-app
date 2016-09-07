(function(){
    'use strict';
    
    angular.module('bookings')
        .controller('FlightsController', FlightsController);
        
    FlightsController.$inject = ['SearchService']
    
    function FlightsController(searchService){
        var vm = this;
        
        vm.search = searchForFlight;
        vm.reset = reset;
        
        init();
        
        function searchForFlight(isValid){
            if(isValid){
                searchService.searchForFlight(vm.flight);
            }
        }
        
        function reset(){
            newFlightSearch();
        }
        
        function init(){
            newFlightSearch();
        }
        
        function newFlightSearch(){
            vm.flight = {};
        }
    }
})();