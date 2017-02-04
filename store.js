angular.module('weddly.store', [])

.controller('storeController', function ($scope, $location, Links) {
  // Your code here

  $scope.link = {};
  $scope.addLink = function(){
  	Links.addOne($scope.link)
  	.then(function(resp){
  		console.log(resp)
  		$location.path('/store')
  	})
  }
});