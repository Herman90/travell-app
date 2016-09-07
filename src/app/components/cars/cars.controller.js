(function(){
    'use strict';

    angular.module('bookings')
        .controller('CarsController', CarsController);
        
    CarsController.$inject = ['SearchService'];
        
    function CarsController(searchService){
        var vm = this;
        
        vm.search = searchCar;
        
        vm.reset = resetForm;
        
        vm.types = ['Economy', 'Primary', 'Laxury'];
        
        init();
       
        function searchCar(isValid){
            if(isValid){
                searchService.searchForCar(vm.car);
            }
        }
        
        function resetForm(){
            newCarSearch();
        }
        
        function init(){
            newCarSearch()
        }
        
        function newCarSearch(){
            vm.car = {};
            vm.car.type = vm.types[0];
        }
    }
})();
