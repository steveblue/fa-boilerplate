(function ( define ) {
  "use strict";

  define([
      //providers
      'providers/route-manager',
      'providers/translate-provider',
      //services
      'services/mh-states'
      ],
    function (
      RouteManager,
      TranslateProvider,
      mhStatesService
    ){
      var app, appName = 'NewApp';

      app = angular
              .module(appName, [
                'ui.router',
                'famous.angular',
                'pascalprecht.translate',
                'ngSanitize',
                'angulartics',
                'angulartics.segment.io'
              ])
              .config( RouteManager )
              .config( TranslateProvider )
              .service('States', mhStatesService );



        angular.bootstrap( document.getElementsByTagName("html")[0], [ appName ]);
 

      return app;
    }
  );

}( define ));
