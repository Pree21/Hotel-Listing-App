var app = angular.module('hotelsApp', ['ngMaterial', 'ngMessages']);
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');
  });
app.controller('webController', function($scope,dataService) {
	$scope.loading = true;
	var init = function(){
	 	dataService.getHotels().then(function(data){
			$scope.hotels = data.HotelList;
			$scope.loading = false;
		});
	};
	$scope.orderProp='PropertyRating';
  $scope.tab = function (tabIndex) {
     //Sort by tab click
      if (tabIndex == 1){
        $scope.orderProp='HotelName';
			} 
			else if (tabIndex == 2){
        $scope.orderProp='PropertyRating';
			} 
			else if (tabIndex == 3){
        $scope.orderProp='TotalCharges';
      } 
   };
   
   $scope.sort = function(item) {
       if ($scope.orderProp == 'PropertyRating') {
					return -item[$scope.orderProp];
       }
   }
	$scope.getNumber = (num)=>new Array(parseInt(num));
	angular.element('[ng-controller=webController]').ready(init);
});