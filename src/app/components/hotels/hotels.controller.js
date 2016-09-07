(function(){
    'use strict';

    angular.module('bookings')
        .controller('HotelsController', HotelsController);
        
    HotelsController.$inject = ['SearchService', '$rootScope', '$sce']
        
    function HotelsController(searchService, $rootScope, $sce){
        var vm = this;
        
        vm.search = searchForHotel;
        vm.reset = reset;
        
        init();
        
        function searchForHotel(isValid){
            if(isValid){
                var newSearch = searchService.searchForHotel(vm.hotel);
                $rootScope.$emit("search_added", newSearch);
            }
        }
        
        function reset(){
            newHotelSearch();
        }
        
        function init(){
            vm.amenities = [
            {
                value: 1,
                text: $sce.trustAsHtml('&#xf005')
            },
            {
                value: 2,
                text: $sce.trustAsHtml('&#xf005&#xf005')
            },
            {
                value: 3,
                text: $sce.trustAsHtml('&#xf005&#xf005&#xf005')
            },
            {
                value: 4,
                text: $sce.trustAsHtml('&#xf005&#xf005&#xf005&#xf005')
            },
            {
                value: 5,
                text: $sce.trustAsHtml('&#xf005&#xf005&#xf005&#xf005&#xf005')
            }];
            newHotelSearch();
        }
        
        function newHotelSearch(){
            vm.hotel = {};
            vm.hotel.amenities = '1';
        }
    }
})();

