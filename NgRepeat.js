(function(){
'use strict';

var store=[
            {
              name : "Milk",
              quantity: "10"
            },
            {
             name : "Bread",
             quantity : "20"
            },
            {
              name : "Cookie",
              quantity : "30"
            },
            {
              name : "Cheese",
              quantity : "40"
            }
           ];

  angular.module('NgRepeatApp',[])
    .controller('NgRepeatCtrl',NgRepeatCtrl);

  NgRepeatCtrl.$inject=['$scope'];

  function NgRepeatCtrl($scope)
  {
       $scope.store=store;
       $scope.addToList=function()
       {
         var newItem={
           name: $scope.newItemName,
           quantity: $scope.newItemQuantity
         }

         store.push(newItem);
       };
  }

})();
