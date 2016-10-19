(function(){
'use strict';

  angular.module('NameCalculatorApp',[])

  .controller('NameCalculatorCtrl',function($scope) {
    $scope.name="";
    $scope.totalValue=0;
    $scope.displayNumeric=function(){
      var totalNameValue=calculateNumericForString($scope.name);
      $scope.totalValue=totalNameValue;
    };

    function calculateNumericForString(string)
    {
      var toalStringValue=0;
      for(var i=0;i<string.length;i++)
      {
        toalStringValue+=string.charCodeAt(i);
      }
      return toalStringValue;
    }

  });

})();
