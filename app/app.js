/* global res */
(function ( define ) {
  "use strict";

  define([
      //providers
      'providers/route-manager',
      //services
      'services/states'
      ],
    function (
      RouteManager,
      mhStatesService
    ){

      var app, appName = 'NewApp';

      // create an instance of res.js globally
      var respond = new res([{"state": "mobile","breakpoint": 320,"cols": 4,"margin": 10,"gutter": 10},
                       {"state": "phablet","breakpoint": 568,"cols": 4,"margin": 10,"gutter": 10},
                       {"state": "tablet","breakpoint": 768,"cols": 12,"margin": 40,"gutter": 20},
                       {"state": "small","breakpoint": 1024,"cols": 12,"margin": 40,"gutter": 20},
                       {"state": "medium","breakpoint": 1366,"cols": 16,"margin": 80,"gutter": 20},
                       {"state": "large","breakpoint": 1920,"cols": 16,"margin": 80,"gutter": 40},
                       {"state": "ultrahd","breakpoint": 10000,"cols": 16,"margin": 120,"gutter": 40}]);

      app = angular
              .module(appName, [
                'ui.router',
                'famous.angular',
                'ngSanitize'
              ])
              .config( RouteManager )
              .service('States', mhStatesService );

      angular.bootstrap( document.getElementsByTagName("html")[0], [ appName ]);


      return app;
    }
  );

}( define ));
