angular.module('images',[])


.controller('imageController', function($scope, $http){
	$scope.images =[];
	$scope.addImage = function(){
		$http.post('/angular',$scope.newImage).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        })
	$scope.removeImage = function(index){
		$scope.images.splice(index,1)
	}

	
};

