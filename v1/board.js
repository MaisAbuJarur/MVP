angular.module('weddly.board', [])

.controller('boardController', function ($scope, Links) {
	$scope.data = {}

	Links.getAll().then(function(data){
		$scope.data.links = data
	})
});