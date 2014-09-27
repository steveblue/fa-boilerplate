/* global res */
// create an instance of res.js globally
var respond = new res([{"state": "portrait","breakpoint": 320,"cols": 4,"margin": 10,"gutter": 10},
                       {"state": "landscape","breakpoint": 568,"cols": 4,"margin": 10,"gutter": 10},
                       {"state": "tablet","breakpoint": 768,"cols": 12,"margin": 40,"gutter": 20},
                       {"state": "small","breakpoint": 1024,"cols": 12,"margin": 40,"gutter": 20},
                       {"state": "medium","breakpoint": 1366,"cols": 16,"margin": 80,"gutter": 20},
                       {"state": "large","breakpoint": 1920,"cols": 16,"margin": 80,"gutter": 20}]);


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
