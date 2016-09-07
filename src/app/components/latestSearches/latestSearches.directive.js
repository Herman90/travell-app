(function(){
    'use strict';
    
    angular.module('bookings')
        .directive('latestSearches', LatestSearchesDirective);
    
    function LatestSearchesDirective(){
        return {
            restrict: 'AE',
            scope: {},
            controller: ['SearchService', 'SEARCH_TYPE', LatestSearchesController],
            controllerAs: 'ctrl',
            templateUrl: '/app/components/latestSearches/latestSearchesView.html'
        }
    }
    
    function LatestSearchesController(searchService, SEARCH_TYPE){
        var vm = this;
        
        vm.previousSearches = [];
        
        function setSearches(searches){
            vm.previousSearches = searches;
        }
            
        function transformSearches(searches){
            return searches.map(function(search){
                switch (search.type){
                    case SEARCH_TYPE.CAR:
                        return transformCarSearch(search);
                    case SEARCH_TYPE.HOTEL:
                        return transformHotelSearch(search);
                    case SEARCH_TYPE.FLIGHT:
                        return transformFlightSearch(search);
                }
            });
        }
        
        function transformSearch(search){
            return {}
        }
        
        function transformHotelSearch(search){
            return {
                icon: icons[SEARCH_TYPE.HOTEL],
                dates: {
                    start: search.startDate,
                    end: search.endDate
                },
                details: search.location + ', ' + search.amenities, 
            }
        }
        
        function transformCarSearch(search){
            return {
                icon: icons[SEARCH_TYPE.CAR],
                dates: {
                    start: search.startDate,
                    end: search.endDate
                },
                details: search.location + ', ' + search.carType
            }
        }
        
        function transformFlightSearch(search){
            return {
                icon: icons[SEARCH_TYPE.FLIGHT],
                dates: {
                    start: search.startDate,
                    end: search.endDate
                },
                details: search.from + ' > ' + search.to
            }
        }
        
        function initPreviousSearches(){
            searchService.getPreviousSearches()
                .then(transformSearches)
                .then(setSearches);
        }
        
        initPreviousSearches();
        
        var icons = {};
        icons[SEARCH_TYPE.CAR] = 'fa-car';
        icons[SEARCH_TYPE.HOTEL] = 'fa-bed';
        icons[SEARCH_TYPE.FLIGHT] = 'fa-plane';
        
        vm.removeSearch = function(search){
            searchService.removeSearch(search);
    }
}
})();