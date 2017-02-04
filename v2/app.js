angular.module('images',[])


.controller('imageController', function($scope){
	$scope.images =[];
	$scope.addImage = function(){
		$scope.images.push($scope.newImage);
		$scope.newImage = '';
	}
	$scope.removeImage = function(index){
		$scope.images.splice(index,1)
	}
});