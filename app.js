(function(){
'use strict';

  angular.module('myFirstApp',[])

  .controller('myFirstCtroller',function($scope) {
    $scope.name="Parvez";
    $scope.sayHello=function(){
      return "Hello Coursera!";
    };
  });

})();
