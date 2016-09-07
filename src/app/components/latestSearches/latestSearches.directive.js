(function(){
    'use strict';
    
    angular.module('bookings')
        .directive('latestSearches', LatestSearchesDirective);
    
    function LatestSearchesDirective(){
        return {
            restrict: 'AE',
            scope: {},
            controller: LatestSearchesController,
            controllerAs: 'ctrl',
            templateUrl: '/app/components/latestSearches/latestSearchesView.html'
        }
    }
    
    LatestSearchesController.$inject = ['SearchService', 'SEARCH_TYPE', '$sce', '$rootScope'];
    
    function LatestSearchesController(searchService, SEARCH_TYPE, $sce, $rootScope){
        var vm = this;
        
        var icons = {};
        icons[SEARCH_TYPE.CAR] = 'fa-car';
        icons[SEARCH_TYPE.HOTEL] = 'fa-bed';
        icons[SEARCH_TYPE.FLIGHT] = 'fa-plane';
        
        vm.removeSearch = removeSearch;
        vm.previousSearches = [];
        
        init();
        
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
            return {
                id: search.id,
                icon: icons[search.type],
                dates: {
                    start: search.startDate,
                    end: search.endDate
                },
                details: ''
            };
        }
        
        function transformHotelSearch(search){
            var transformedSearch = transformSearch(search);
            transformedSearch.details = $sce.trustAsHtml(search.location + ', <span class="fa">' + Array(parseInt(search.amenities) + 1).join('&#xf005;') + '</span>');
            
            return transformedSearch;
        }
        
        function transformCarSearch(search){
            var transformedSearch = transformSearch(search);
            transformedSearch.details = $sce.trustAsHtml(search.location + ', ' + search.carType);
            
            return transformedSearch;
        }
        
        function transformFlightSearch(search){
            var transformedSearch = transformSearch(search);
            transformedSearch.details = $sce.trustAsHtml(search.from + ' > ' + search.to);
            
            return transformedSearch;
        }
        
        function init(){
            searchService.getPreviousSearches()
                .then(transformSearches)
                .then(setSearches);
            
            $rootScope.$on("search_added", searchAddedHandler);
        }
        
        function removeSearch(searchId){
            searchService.removeSearch(searchId);
            
            var search = getSearchById(searchId);
            
            var i = vm.previousSearches.indexOf(search);
            
            if(i != -1) {
                vm.previousSearches.splice(i, 1);
            }
        }
        
        function searchAddedHandler(e, data){
            var transfromedSearch = transformSearches([data])[0];
            vm.previousSearches.push(transfromedSearch);
        }
        
        function getSearchById(searchId){
            return vm.previousSearches.filter(function(obj){
                return obj.id === searchId;
            })[0];
        }
}
})();