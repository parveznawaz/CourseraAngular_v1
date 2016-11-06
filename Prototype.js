(function(){
'use strict';


  angular.module('PrototypeApp',[])
    .controller('PrototypeCtrl',PrototypeCtrl);

  PrototypeCtrl.$inject=['$scope'];

  function PrototypeCtrl($scope)
  {
    var parent={
      value:"ParentValue",
      obj:{
        objValue:"parentObjValue"
      },
      walk: function()
      {
        console.log("walking");
      }
    };

    var child=Object.create(parent);
    console.log("Child",child);
    console.log("Parent",parent);

    var student1 = {
  message: "I LOVE this course!"
};

var student2 = Object.create(student1);
student2.getMessage = function () {
  this.message = "Student 1 was paid off by Yaakov to say that!";
  return this.message;
};
var coverUp = student2.getMessage();
console.log(student2.message);

  }

  })();
