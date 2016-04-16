app.controller('FirspageCtrl', function ($scope, $stateParams, ionicMaterialInk, $http) {
  //ionic.material.ink.displayEffect();
  $scope.messages = {};
  $scope.message1 = {};
  $scope.editMessage = {};
  $scope.newMessage = {};
  $scope.newComment = {};
  $scope.comment = {};
  var base_url_produccio = "http://147.83.7.159:8080";
  var base_url = "http://localhost:8080";


  getMessage();
  function getMessage() {
    $http.get(base_url + "/message") //hacemos get de todos los messages
      .success(function (data) {
        $scope.messages = data;
      })
      .error(function (err) {
        console.log(err);
      });
  }
  $scope.LikeMensaje = function (id) {
    $http.post(base_url+"/message/" + id +"/like" , {})
      .success(function (data, status, headers, config) {
        getMessage();
      })
      .error(function (error, status, headers, config) {
        console.log(error);
      });
  }
  $scope.borrarMensaje = function (id) {
    $http.delete(base_url+"/message/" + id, {})
      .success(function (data, status, headers, config) {
        getMessage();
      })
      .error(function (error, status, headers, config) {
        console.log(err);
      });
  }
});
