angular.module('weddly.services', [])

.factory('Links', function ($http) {
  var getAll = function (links){
  return $http({
      method: 'GET',
      url: '/api/board',
      data: links
    })
    .then(function (resp) {
      return resp.data
    });
  };

  var addOne = function (link) {
    return $http({
      method: 'POST',
      url: '/api/board',
      data: link
    })
    .then(function (resp) {
     return resp;
    });

  }
  return {
    getAll:getAll,
    addOne : addOne
  }

