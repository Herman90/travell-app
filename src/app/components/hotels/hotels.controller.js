(function(){
    'use strict';

    angular.module('bookings')
        .controller('HotelsController', ['SearchService', HotelsController]);
        
    function HotelsController(searchService){
        var vm = this;
        
        vm.hotel = {};
        
        vm.search = function(isValid){
            if(isValid){
                searchService.searchForHotel(vm.hotel.amenities, vm.hotel.location, vm.hotel.interval.startDate, vm.hotel.interval.endDate);
            }
        }
        
        vm.reset = function(){
            vm.hotel = {};
        }
    }
})();

