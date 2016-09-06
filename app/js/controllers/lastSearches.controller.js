'use strict';

angular.module('bookings')
    .controller('LastSearchesController', ['ReservationService', lastSearchesController]);
    
function lastSearchesController(reservationService){
    this.getSearches = function(){
        return reservationService.getLastSearches();
    }
    
    this.getIconClassByType = function(type){
        switch(type){
            case 'flight':
                return 'fa-plane';
            case 'hotel':
                return 'fa-bed';
            case 'car':
                return 'fa-car';
        }
    }
    
    this.previousSearches = this.getSearches(); 
    
    this.removeSearch = function(search){
        reservationService.removeSearch(search);
    }
}