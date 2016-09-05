'use strict';

angular.module('bookings')
    .controller('CarsController', carsController);
    
function carsController($scope){
    $scope.types = ['Economy', 'Primary', 'Laxury'];
    $scope.selectedType = $scope.types[0];
    $scope.interval = {
        startDate: "",
        endDate: ""
    }
    
    $scope.search = function(isValid){
        if(isValid){
            console.log('You search for:')
            console.log($scope.interval.startDate + ' - ' + $scope.interval.endDate + ':' + $scope.selectedType + ', ' + $scope.location);
        }
    }
}