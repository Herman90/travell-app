(function(){
    'use strict';

    angular.module('bookings')
        .controller('CarsController', CarsController);
        
    CarsController.$inject = ['SearchService', '$rootScope'];
        
    function CarsController(searchService, $rootScope){
        var vm = this;
        
        vm.search = searchCar;
        
        vm.reset = resetForm;
        
        vm.types = ['Economy', 'Primary', 'Laxury'];
        
        init();
       
        function searchCar(isValid){
            if(isValid){
                var newSearch = searchService.searchForCar(vm.car);
                $rootScope.$emit("search_added", newSearch);
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
