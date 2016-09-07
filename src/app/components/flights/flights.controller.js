(function(){
    'use strict';
    
    angular.module('bookings')
        .controller('FlightsController', FlightsController);
        
    FlightsController.$inject = ['SearchService', '$rootScope']
    
    function FlightsController(searchService, $rootScope){
        var vm = this;
        
        vm.search = searchForFlight;
        vm.reset = reset;
        
        init();
        
        function searchForFlight(isValid){
            if(isValid){
                var newSearch = searchService.searchForFlight(vm.flight);
                $rootScope.$emit("search_added", newSearch);
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