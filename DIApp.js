// (function(){
// 'use strict';
//
//   angular.module('DIApp',[])
//
//   .controller('DIAppCtrl',DIAppCtrl);
//   DIAppCtrl.$inject=["$scope","$filter"];
//
//   function DIAppCtrl($scope,$filter)
//   {
//       $scope.name="Parvez";
//
//       $scope.upper=function(){
//         var upCase=$filter('uppercase');
//         $scope.name=upCase($scope.name);
//       };
//   }
//
// })();
!function(){"use strict";function e(e,n){e.name="Parvez",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("DIApp",[]).controller("DIAppCtrl",e),e.$inject=["$scope","$filter"]}();
