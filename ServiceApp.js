(function()
  {
    'use strict';

    angular.module('ServiceApp',[])
    .controller('ShoppingListAddCtrl',ShoppingListAddCtrl)
    .controller('ShoppingListShowCtrl',ShoppingListShowCtrl)
    .service('ShoppingListService',ShoppingListService)

    ShoppingListAddCtrl.$inject=['ShoppingListService'];

    function ShoppingListAddCtrl(ShoppingListService)
    {
      var itemAdder=this;
      itemAdder.itemName="";
      itemAdder.itemQuantity="";
      itemAdder.addItem=function()
      {
        ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
      };
    };


    ShoppingListShowCtrl.$inject=['ShoppingListService'];

    function ShoppingListShowCtrl(ShoppingListService)
    {
      var showList=this;
      showList.items=ShoppingListService.getItems();
      showList.removeItem=function(itemIndex)
      {
        ShoppingListService.removeItem(itemIndex);
      }
    }


    //Service
    function ShoppingListService(){
      var service=this;

      var items=[];
      service.addItem=function(itemName,itemQuantity){
        var item={
          name: itemName,
          quantity: itemQuantity
        }
        items.push(item);
      };

      service.getItems=function(){
        return items;
      };

      service.removeItem=function(itemIndex)
      {
        items.splice(itemIndex,1);
      };
    };
  })();
