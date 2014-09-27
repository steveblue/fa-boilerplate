(function( define ) {
  "use strict";

  /**
   * Register the NewController class with RequireJS
   */
  define([
      // List any files that should be loaded by RequireJS
      //'deps',
    ],
    function (
      // List variable name for needed deps
      // deps,
    ){
      // Do any set up work


      // Create Controller, remember controllers are created and destroyed as needed by angular
      var NewController = function( $scope ){

      };


      // If you are injecting things with angular, list their names in an array before returning controller function
      //return [ "$rootScope", ActivityController ];

      return NewController;
    }
  );

}( define ));
