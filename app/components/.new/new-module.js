(function ( define, angular ) {
  "use strict";

  define([
      'components/.new/new-directive'
    ],
    function (
      NewDirective
    ){
      var moduleName = "NewApp.New";

      angular.module( moduleName, [] )
        .directive( "newTag", NewDirective );

      return moduleName;
    }
  );

}( define, angular ));
