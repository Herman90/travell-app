(function(){
    'use strict';
    
    angular.module('bookings')
    .directive('navigation', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/app/components/navigation/navigationView.html',
            controller: NavigationController,
            controllerAs: 'ctrl'
        };
    });
    
    function NavigationController(){
        var vm = this;
        
        vm.activeTab = 1;
        
        vm.isSelected = function(i){
            return vm.activeTab === i;
        }
        
        vm.selectTab = function(i){
            vm.activeTab = i;
        }
    }
})();

