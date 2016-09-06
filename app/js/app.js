(function(){
    'use strict';
    
    angular.module('bookings', ['ngRoute', 'ngStorage'])
        .config(routeConfig);
        
    function routeConfig($routeProvider){
        $routeProvider
            .when('/hotels', {
                templateUrl: '../views/hotels.html',
                controller: 'HotelsController as hotels'
            })
            .when('/flights', {
                templateUrl: '../views/flights.html',
                controller: 'FlightsController as flights'
            })
            .when('/cars', {
                templateUrl: '../views/cars.html',
                controller: 'CarsController as cars',
                
            })
            .when('/', {
                redirectTo: '/flights'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();

