(function(){
    'use strict';
    
    angular.module('bookings')
        .constant("SEARCH_TYPE", {
            'FLIGHT': 'flight',
            'CAR': 'car',
            'HOTEL': 'hotel'
        });
    
})();