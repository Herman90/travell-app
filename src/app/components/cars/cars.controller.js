(function(){
    'use strict';

    angular.module('bookings')
        .controller('CarsController', ['SearchService', CarsController]);
        
    function CarsController(searchService){
        var vm = this;
        
        vm.types = ['Economy', 'Primary', 'Laxury'];
        
        vm.car = {};
        vm.car.type = vm.types[0];
       
        vm.search = function(isValid){
            if(isValid){
                searchService.searchForCar(vm.car.type, vm.car.location, vm.car.interval.startDate, vm.car.interval.endDate);
            }
        }
        
        vm.reset = function(){
            vm.car = {};
        }
    }
})();
