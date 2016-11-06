(function(){
'use strict';

  angular.module('DigestCycleApp',[])
  .controller('DigestCycleCtrl',DigestCycleCtrl);
  DigestCycleCtrl.$inject=['$scope','$timeout'];

  function DigestCycleCtrl($scope,$timeout)
  {

    $scope.onceCounter=1;
      $scope.counter=0;

      $scope.showNumberOfWatchers=function()
      {
        console.log("Number of watchers is "+$scope.$$watchersCount);
      }

      $scope.countOnce=function()
      {
        $scope.onceCounter=1;
      }

      // $scope.upCounter=function()
      // {
      //   setTimeout(function(){
      //     $scope.counter++;
      //     console.log("Counter incremented");
      //     $scope.$digest();
      //   },2000);
      //
      // };

      // $scope.upCounter=function()
      // {
      //   setTimeout(function(){
      //     $scope.$apply(function(){
      //       $scope.counter++;
      //       console.log("Counter incremented");
      //     });
      //   },2000);
      //
      // };

        $scope.fullName="Parvez Nawaz";
        $scope.setFullName=function(){
          $scope.fullName=$scope.fullName+" Mia";
        };


        $scope.upCounter=function()
        {
          $timeout(function () {
            $scope.counter++;
            console.log("Counter incremented");
          }, 2000);
        };




  //Method:1 old method to watch whether value has changed
  //     $scope.$watch('onceCounter',function(newValue, oldValue)
  //   {
  //     console.log("onceCounter old value: ",oldValue);
  //     console.log("onceCounter new value: ",newValue);
  //   });
  //
  //   $scope.$watch('counter',function(newValue, oldValue)
  // {
  //   console.log("counter old value: ",oldValue);
  //   console.log("counter new value: ",newValue);
  // });

  //method:2
  $scope.$watch(function(){
    console.log("Digest loop fired..")
  });



  }

})();
