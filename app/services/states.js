/* global respond */
(function( define ) {
    "use strict";

    /**
     * Register the States class with RequireJS
     */
    define( [], function ()
    {
           var States = function( scope ){

               var that = this;

               this.StateCheck = function( scope ){

                 if (typeof scope[respond.device] === 'function') {
                    scope[respond.device](scope);
                 }
                 if (typeof scope[respond.state] === 'function') {
                    scope[respond.state](scope);
                 }
                 if(!scope.$$phase) {
                   	scope.$apply();
                 }

              };

              return {

                stateChange: function(scope){

                  that.StateCheck( scope );

                  window.addEventListener('stateChange',function(){

                   that.StateCheck( scope );

                  });
                }

              };

           };

        // Register as global constructor function

        return [ States ];

    });


}( define ));
