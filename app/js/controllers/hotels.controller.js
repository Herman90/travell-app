'use strict';

angular.module('bookings')
    .controller('HotelsController', ['ReservationService', hotelsController]);
    
function hotelsController(reservationService){
    var vm = this;
    
    vm.search = function(isValid){
        if(isValid){
            reservationService.searchForHotel(vm.amenities, vm.location, vm.interval.startDate, vm.interval.endDate);
        }
    }
}