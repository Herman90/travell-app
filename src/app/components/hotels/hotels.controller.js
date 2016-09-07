(function(){
    'use strict';

    angular.module('bookings')
        .controller('HotelsController', HotelsController);
        
    HotelsController.$inject = ['SearchService', '$rootScope']
        
    function HotelsController(searchService, $rootScope){
        var vm = this;
        
        vm.search = searchForHotel;
        vm.reset = reset;
        
        init();
        
        function searchForHotel(isValid){
            if(isValid){
                var newSearch = searchService.searchForHotel(vm.hotel);
                $rootScope.$emit("search_added", newSearch);
            }
        }
        
        function reset(){
            newHotelSearch();
        }
        
        function init(){
            newHotelSearch();
        }
        
        function newHotelSearch(){
            vm.hotel = {};
            vm.hotel.amenities = 1;
        }
    }
})();

