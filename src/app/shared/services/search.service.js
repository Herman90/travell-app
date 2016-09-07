(function(){
    'use strict';

    angular.module('bookings')
        .service('SearchService', SearchService);
        
    function SearchService($localStorage){
        var service = this;
        var searches = $localStorage.previousSearches || [];
        
        service.searchForHotel = function(amenities, location, startDate, endDate){
            searches.push({
                type: "hotel",
                string: startDate + ' - ' + endDate + ', ' + location + ', ' + amenities,
                amenities:  amenities,
                location: location,
                startDate: startDate,
                endDate: endDate
            });
            $localStorage.previousSearches = searches;
        }
        
        service.searchForCar = function(carType, location, startDate, endDate){
            searches.push({
                type: "car",
                string: startDate + ' - ' + endDate + ', ' + location + ', ' + carType,
                carType:  carType,
                location: location,
                startDate: startDate,
                endDate: endDate
            });
            $localStorage.previousSearches = searches;
        }
        
        service.searchForFlight = function(departure, arrival, startDate, endDate){
            searches.push({
                type: "flight",
                string: startDate + ' - ' + endDate + ', ' + departure + ' > ' + arrival,
                from: departure,
                to: arrival,
                startDate: startDate,
                endDate: endDate
            });
            $localStorage.previousSearches = searches;
        }
        
        service.getPreviousSearches = function(){
            return new Promise(function(resolve){
                resolve(searches);
            });
        }
        
        service.removeSearch = function(search){
            var i = searches.indexOf(search);
            if(i != -1) {
                searches.splice(i, 1);
            }
            $localStorage.previousSearches = searches;
        }
    }
})();