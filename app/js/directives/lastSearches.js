angular.module('bookings')
    .directive('lastSearches', lastSearchesDirective)
    .directive('searchControl', serchControlDirective);
    
function lastSearchesDirective(){
    return {
        restrict: 'AE',
        scope: {},
        controller: 'LastSearchesController',
        controllerAs: 'searches',
        templateUrl: '../../views/searches.html'
    }
    
}
    
function serchControlDirective(){
    return {
        restrict: 'AE',
        bindToController: {
            search: "="
        },
        controller: function(){
            debugger;
        },
        controllerAs: "s",
        templateUrl: function(tElem, tAttrs){
            
            
            //if(type === "flight"){
                return "../../views/flightSearch.html";
            //}
        }
    }
}