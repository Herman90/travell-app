'use strict';

angular.module('bookings')
    .controller('CarsController', ['ReservationService', carsController]);
    
function carsController(reservationService){
    var vm = this;
    vm.types = ['Economy', 'Primary', 'Laxury'];
    vm.selectedType = vm.types[0];
   
    vm.search = function(isValid){
        if(isValid){
            reservationService.searchForCar(vm.selectedType, vm.location, vm.interval.startDate, vm.interval.endDate);
        }
    }
}