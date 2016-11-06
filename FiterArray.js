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

  angular.module('FiterArrayApp',[])
    .controller('FiterArrayCtrl',FiterArrayCtrl);

  FiterArrayCtrl.$inject=['$scope'];

  function FiterArrayCtrl($scope)
  {
    var numberArray=[1,2,3,4,5,6,7,8,9,10];
    console.log("Number array : "+numberArray)
    var filterdArray=numberArray.filter(function(value){
      return value>5;
    });
    console.log("Filtered number array: "+filterdArray);
  var evenArray=numberArray.filter(evenFilter);
    console.log("Even filter array: "+evenArray);

    var shoppingList=["Milk","Black chocolet","Dark chocolet","cheese"];
    var searchResult=shoppingList.filter(searchFilter);
    console.log(searchResult);

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

  function evenFilter(value)
  {
    //if(value%2==0)
    return value%2==0;
  }
  function searchFilter(value)
  {
    return value.indexOf("chocolet")!=-1;
 }
})();
