angular.module('bookings')
    .controller('NavigationController', navigationController);
    
function navigationController($scope){
    $scope.activeTab;
    
    $scope.isSelected = function(i){
        return $scope.activeTab === i;
    }
    
    $scope.selectTab = function(i){
        $scope.activeTab = i;
    }
}