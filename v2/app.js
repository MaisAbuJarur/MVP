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

	 // $http.post("/", {image}).success(function(message, status) {
  //       console.log('Message posted');
    // })
});

//  $http.post('/angular',$scope.newImage).
// //         success(function(data) {
// //             console.log("posted successfully");
// //         }).error(function(data) {
// //             console.error("error in posting");
// //         })