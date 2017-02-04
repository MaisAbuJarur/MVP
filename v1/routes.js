angular.module('weddly', [
  'weddly.store',
  'weddly.board',
  'weddly.services'
  
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/store', {
      templateUrl: 'app/store.html',
      controller: 'storeController'
    })
    .when('/board', {
      templateUrl: 'app/board.html',
      controller: 'boardController'
    })

    // Your code here