(function(){
    'use strict';
    
    angular.module('bookings', ['ngRoute'])
        .config(routeConfig);
        
    function routeConfig($routeProvider){
        $routeProvider
            .when('/hotels', {
                templateUrl: '../views/hotels.html'
            })
            .when('/flights', {
                templateUrl: '../views/flights.html'
            })
            .when('/cars', {
                templateUrl: '../views/cars.html',
                controller: 'CarsController'
            })
            .when('/', {
                redirectTo: '/flights'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();

