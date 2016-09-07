(function(){
    'use strict';
    
    angular.module('bookings')
        .config(routeConfig);
        
    function routeConfig($routeProvider){
        $routeProvider
            .when('/hotels', {
                templateUrl: '/app/components/hotels/hotelsView.html',
                controller: 'HotelsController as ctrl'
            })
            .when('/flights', {
                templateUrl: '/app/components/flights/flightsView.html',
                controller: 'FlightsController as ctrl'
            })
            .when('/cars', {
                templateUrl: '/app/components/cars/carsView.html',
                controller: 'CarsController as ctrl',
                
            })
            .otherwise({
                redirectTo: '/flights'
            });
    }
})();