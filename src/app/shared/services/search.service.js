(function(){
    'use strict';

    angular.module('bookings')
        .service('SearchService', SearchService);
        
    function SearchService($localStorage, SEARCH_TYPE, $q){
        var service = this;
        var searches = [];
        
        service.searchForHotel = searchForHotel;
        service.searchForCar = searchForCar;
        service.searchForFlight=  searchForFlight;
        service.getPreviousSearches = getPreviousSearches;
        service.removeSearch = removeSearch;
        
        init();
        
        function searchForHotel(hotel){
            var hotelSearch = {
                type: SEARCH_TYPE.HOTEL, 
                amenities:  hotel.amenities,
                location: hotel.location,
                startDate: hotel.interval.startDate,
                endDate: hotel.interval.endDate
            };
            searches.push(hotelSearch);
            return hotelSearch;
        }
        
        function searchForCar(car){
            var carSearch = {
                id: generateId(),
                type: SEARCH_TYPE.CAR,
                carType:  car.type,
                location: car.location,
                startDate: car.interval.startDate,
                endDate: car.interval.endDate
            };
            searches.push(carSearch);
            return carSearch;
        }
        
        function searchForFlight(flight){
            var flightSearch = {
                id: generateId(),
                type: SEARCH_TYPE.FLIGHT,
                from: flight.departure,
                to: flight.arrival,
                startDate: flight.interval.startDate,
                endDate: flight.interval.endDate
            };
            searches.push(flightSearch);
            return flightSearch;
        }
        
        function getPreviousSearches(){
            var deferred = $q.defer();
            deferred.resolve(searches);
            
            return deferred.promise;
        }
        
        function removeSearch(searchId){
            var search = getSearchById(searchId);
            
            var i = searches.indexOf(search);
            
            if(i != -1) {
                searches.splice(i, 1);
            }
        }
        
        function generateId(){
            var min = 1000000;
            var max = 10000000;
            return Math.random() * (max - min) + min;
        }
        
        function getSearchById(searchId){
            return searches.filter(function(obj){
                return obj.id === searchId;
            })[0];
        }
        
        function init(){
            $localStorage.previousSearches = $localStorage.previousSearches || [];
            searches = $localStorage.previousSearches;
        }
    }
})();