
// Main Folder Locations
var rootDir   = __dirname,
    devDir    = rootDir + '/build/www',
    prodDir   = rootDir + '/build/prod';

// Export Specific Paths
module.exports = {
  'rootDir': rootDir,
  'devDir':  devDir,
  'prodDir': prodDir,

// Lib Files
  lib: {
    src:[
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/angular-translate-loader-url/angular-translate-loader-url.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/famous/dist/famous-global.js',
      'bower_components/famous-angular/dist/famous-angular.js',
      'bower_components/headjs/dist/1.0.0/head.load.js',
      'bower_components/lodash/dist/lodash.js',
      'bower_components/es6-promise/promise.js',
      'bower_components/requirejs/require.js',
      'bower_components/resjs/res.js',
      'node_modules/angulartics/src/angulartics.js',
      'node_modules/angulartics/src/angulartics-segmentio.js'

    ],
    min:[
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
      'bower_components/angular-translate-loader-url/angular-translate-loader-url.min.js',
      'bower_components/angular-translate/angular-translate.min.js',
      'bower_components/angular/angular.min.js',
      'bower_components/angular/angular.min.js.map',
      'bower_components/angular-sanitize/angular-sanitize.min.js',
      'bower_components/angular-sanitize/angular-sanitize.min.map',
      'bower_components/famous/dist/famous-global.js', // angular didn't like loading the mins for famous and famous-angular
      'bower_components/famous-angular/dist/famous-angular.js',
      'bower_components/headjs/dist/1.0.0/head.load.min.js',
      'bower_components/lodash/dist/lodash.min.js',
      'bower_components/es6-promise/promise.min.js',
      'bower_components/requirejs/require.js', // no min
      'bower_components/resjs/res.min.js',
      'node_modules/angulartics/dist/angulartics.min.js',
      'node_modules/angulartics/dist/angulartics-segmentio.min.js'
    ],
    dev:  devDir  + '/lib',
    prod: prodDir + '/lib'
  },

// JSHINT
  jshint: {
    rc:  rootDir + '/.jshintrc',
    all: ['app/**/*.js', './*.js', 'tasks/**/*.js'],
    app: ['app/**/*.js']
  },

// Symlink
  symlink: [
    '!app/components/.new/**/*.*',
    'app/**/*.js',
    'app/**/*.scss',
    'app/**/*.json',
    'app/**/*.html'
  ],

// Assets
  assets: {
    src:  'app/assets/**/*.*',
    dev:  devDir  + '/assets',
    prod: prodDir + '/assets'
  },

// Clean ie rimraf
  clean: {
    dev:  devDir,
    prod: prodDir
  },

// SASS
  sass: {
    src: 'app/sass/**/*.scss',
    dev:    devDir  + '/css',
    prod:   prodDir + '/css'
  }
};
