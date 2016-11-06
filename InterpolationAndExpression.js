(function(){
'use strict';

  angular.module('InterpolationAndExpressionApp',[])
  .filter('custom',CustomFilterFactory)
  .filter('loves',LovesFilter)
  .filter('truth',TruthFilter)
  .controller('InterpolationAndExpressionCtrl',InterpolationAndExpressionCtrl);
  InterpolationAndExpressionCtrl.$inject=['$scope','$filter','customFilter','lovesFilter'];

  function InterpolationAndExpressionCtrl($scope,$filter,customFilter,lovesFilter)
  {
      $scope.name="Parvez";
      $scope.cookieCost=.45;
      $scope.sayMessage=function(){
        var msg= "Parvez likes to eat healthy food at night";
        var output=$filter('uppercase')(msg);
        output=customFilter(output);
        return output;
      };

      $scope.sayLoveMessage=function()
      {
        var msg="Parvez likes to eat cookie";
        msg=lovesFilter(msg);
        return msg;
      }

      $scope.stateOfBeing="hungry";

      $scope.feedMe=function(){
        if($scope.stateOfBeing=='full')
          $scope.stateOfBeing='hungry'
        else
          $scope.stateOfBeing='full';
      };
  }

  function CustomFilterFactory()
  {
      return function(input)
      {
        return input;
      }
  };

  function LovesFilter()
  {
    return function(input)
    {
      input=input||"";
      input=input.replace("likes","Loves");
      return input;
    }
  }

  function TruthFilter()
  {
    return function(input, target, replace)
    {
      input=input||"";
      input=input.replace(target,replace);
      return input;
    }
  }
})();
