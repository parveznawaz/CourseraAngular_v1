(function()
  {
    'use strict';

    angular.module('JsInheritenceApp',[])
    .controller('JsInheritenceCtrl',JsInheritenceCtrl);

    JsInheritenceCtrl.$inject=['$scope'];

    function JsInheritenceCtrl($scope)
    {
      var o={
          a:2,
          m:function(b)
          {
            return this.a+1;
          }
        }

        console.log(o.a);
        console.log(o.m());
        var p=Object.create(o);
        p.a=4;
        console.log(p.m());
    };



  })();
