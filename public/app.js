(function(){

//Angular app  initiatalized with no dependencies
var app = angular.module('myApp', []);

app.controller("MainCntrl", ['$scope','Members', function($scope,Members){
  this.title = "This is my Startup App";
  $scope.team = [];
  var socket = io.connect ();
   socket.on('greet',function(msg){
     alert(msg);
   });
  $scope.fetchTeam =function(){
    Members.all().then(function(data){
      $scope.team = data.data;
      console.log($scope.team);
      //alert(data);
    });
  };

}]);

})();
