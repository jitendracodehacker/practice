(function(){

//Angular app  initiatalized with no dependencies
var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state({
    name:'home',
    url: '/home',
    templateUrl:'/home.html'
  })
  .state(
    {
      name: 'about',
      url:'/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }
  );
  $urlRouterProvider.otherwise('home');
});

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
