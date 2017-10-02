(function () {
  angular.module('myApp')
  .factory('Members',MembersFactory);
  function MembersFactory($http){
    return {
      all : function () {
        return $http({
          method: 'GET',
          url :'\members'
        });
      }
    };
  }
  })();
