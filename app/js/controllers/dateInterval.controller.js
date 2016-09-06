'use strict';

angular.module('bookings')
    .controller('DateIntervalController', dateIntervalController);
    
function dateIntervalController(){
    this.minDate = new Date();
    this.maxDate = new Date();
}