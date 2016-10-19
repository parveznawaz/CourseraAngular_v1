(function(){
'use strict';

  angular.module('InterpolationAndExpressionApp',[])

  .controller('InterpolationAndExpressionCtrl',InterpolationAndExpressionCtrl);
  InterpolationAndExpressionCtrl.$inject=['$scope'];

  function InterpolationAndExpressionCtrl($scope)
  {
      $scope.name="Parvez";
      $scope.sayMessage=function(){
        return "Parvez likes to eat healthy food at night";
      };
      $scope.stateOfBeing="hungry";

      $scope.feedMe=function(){
        if($scope.stateOfBeing=='full')
          $scope.stateOfBeing='hungry'
        else
          $scope.stateOfBeing='full';
      };
  }

})();
