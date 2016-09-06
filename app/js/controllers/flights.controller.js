angular.module('bookings')
    .controller('FlightsController', ['ReservationService', flightsController]);
    
function flightsController(reservationService){
    var vm = this;
    
    vm.search = function(isValid){
        if(isValid){
            reservationService.searchForFlight(vm.departure, vm.arrival, vm.interval.startDate, vm.interval.endDate);
        }
    }
    
}