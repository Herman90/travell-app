(function(){
    'use strict';

    angular.module('bookings')
        .controller('HotelsController', HotelsController);
        
    HotelsController.$inject = ['SearchService']
        
    function HotelsController(searchService){
        var vm = this;
        
        vm.search = searchForHotel;
        vm.reset = reset;
        
        init();
        
        function searchForHotel(isValid){
            if(isValid){
                searchService.searchForHotel(vm.hotel);
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
        }
    }
})();

