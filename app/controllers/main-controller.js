(function( define ) {
  "use strict";

  define( [], function ()
  {
    var MainController = function( $rootScope, $scope, $famous ){

      /*
      $scope.Engine = $famous['famous/core/Engine'];
      $scope.EventHandler = $famous['famous/core/EventHandler'];
      $scope.StateModifier = $famous['famous/modifiers/StateModifier'];
      $scope.Transform = $famous['famous/transitions/Transitionable'];
      $scope.Transitionable = $famous['famous/transitions/Transitionable'];
      $scope.Easing = $famous['famous/transitions/Easing'];
      */
     
      //declare eventHandlers
      $scope.headerEvent = new $famous['famous/core/EventHandler']();
      $scope.navEvent = new $famous['famous/core/EventHandler']();

      $scope.headerPostEvent = new $famous['famous/core/EventHandler']();
      $scope.postEvent = new $famous['famous/core/EventHandler']();

      //global checks
      $scope.navTrigger = false;
      $scope.postTrigger = false;

    };

    return [ "$rootScope", "$scope", "$famous", MainController ];

  });

}( define ));

