(function ( define ) {
    "use strict";


    define([

        ],
        function ( 
        
                 )
        {
                /**
                 * Translation management constructor ()
                 * - to be used in angular.config()
                 *
                 * @see bootstrap.js
                 */
            var TranslateProvider = function ( $translateProvider, $translateStaticFilesLoaderProvider, $translateStaticFilesLoader )
            {

              $translateProvider
                .useStaticFilesLoader({
                  prefix: '/languages/',
                  suffix: '.json'
                })
                .preferredLanguage('en_US');
            };
              

            return ["$translateProvider", TranslateProvider ];
        });


}( define ));