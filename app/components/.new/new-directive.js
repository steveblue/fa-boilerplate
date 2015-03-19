(function( define ) {
  "use strict";

  /**
   * Register the Controller class with RequireJS
   */
  define([
      // Deps,
    ],
    function (
      // Deps Vars
    ){

      var NewDirective = function( /* angular deps injection */ ){
            // Returns Directive Creation Object
            return {
              restrict: "AE",
              templateUrl: "./components/.new/new.html",
              link: {
                pre: function(scope, iElem, iAttrs) {
                  // Before child scopes have been linked
                },
                post: function(scope, iElem, iAttrs) {
                  // after child scopes have been linked
                },
              }
            };
          }; // End Directive def


      // If Using Angular Dep Injection
      //return [ "$rootScope",  "States", NewDirective ];

      return NewDirective;
    } // end require function
  ); // end define call

}( define ));
