(function( define ) {
    "use strict";

    /**
     * Register the Basic class with RequireJS
     */
    define( [], function ()
    {
           var Basic = function(){


             this.title = 'Service Delivered This Title';


           };

        // Register as global constructor function

        return [ Basic ];

    });


}( define ));