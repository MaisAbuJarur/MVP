angular.module('images',['ngRoute'])


.controller('imageController', function($scope, $http){
	$scope.images =[];
	$scope.addImage = function(){
		$scope.images.push($scope.newImage);
		$scope.newImage = '';
	}
	$scope.removeImage = function(index){
		$scope.images.splice(index,1)
	}

	
});

