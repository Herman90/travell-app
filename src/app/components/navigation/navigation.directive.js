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
    
    NavigationController.$inject = ['$location'];
    
    function NavigationController($location){
        var vm = this;
        
        vm.getClass = getClass;
        
        function getClass(path){
            return ($location.path().substr(0, path.length) === path) ? 'active' : '';
        }
    }
})();

