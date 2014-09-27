(function ( define, angular ) {
  "use strict";

  define([
      'components/.new/new-controller',
      'components/.new/new-directive'
    ],
    function (
      NewController,
      NewDirective
    ){
      var moduleName = "NewApp.New";

      angular.module( moduleName, [] )
        .directive( "mhNewTag", NewDirective )
        .controller( "mhNewController", NewController );

      return moduleName;
    }
  );

}( define, angular ));
