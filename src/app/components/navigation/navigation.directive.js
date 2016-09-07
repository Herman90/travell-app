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
        
        vm.isSelected = isSelected;
        vm.selectTab = selectTab;
        
        init();
        
        function isSelected(i){
            return vm.activeTab === i;
        }
        
        function selectTab(i){
            vm.activeTab = i;
        }
        
        function init(){
            vm.activeTab = 1;
        }
    }
})();

