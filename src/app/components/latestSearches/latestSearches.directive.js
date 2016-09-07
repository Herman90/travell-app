(function(){
    'use strict';
    
    angular.module('bookings')
        .directive('latestSearches', LatestSearchesDirective);
    
    function LatestSearchesDirective(){
        return {
            restrict: 'AE',
            scope: {},
            controller: ['SearchService', LatestSearchesController],
            controllerAs: 'ctrl',
            templateUrl: '/app/components/latestSearches/latestSearchesView.html'
        }
    }
    
    function LatestSearchesController(searchService){
        var vm = this;
        
        vm.previousSearches = []; 
        
        function initPreviousSearches(){
            searchService.getPreviousSearches().then(function(searches){
                vm.previousSearches = searches;
            })
        }
        
        initPreviousSearches();
    
        vm.getIconClassByType = function(type){
            switch(type){
                case 'flight':
                    return 'fa-plane';
                case 'hotel':
                    return 'fa-bed';
                case 'car':
                    return 'fa-car';
            }
        }
        
        vm.removeSearch = function(search){
            searchService.removeSearch(search);
    }
}
})();