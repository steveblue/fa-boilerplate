// Gulpfile.js
//"use strict";
var gulp = require('gulp'),
    runSequence = require('run-sequence');

/*
 *
 * Tasks are now located in the 'tasks' folder at the root directory
 * Options for compile steps are now located in the respective task file
 * Paths for build and source locations are in config.paths.js at the root directory
 *
 */
var loadTasksFromFiles = require('require-dir')('./tasks');


// Development and Production Build tasks
// Tasks currently using runSequence plugin until gulp 4 resolves dependency task issues.

// DEV TASKS
// Build Dev Site 'build/www' for local dev
gulp.task('dev:build:local', function(callback){
  runSequence(
    'clean:dev',
    'jshint',
    ['symlink', 'symlink:lib', 'symlink:assets'],
    ['sass:dev'/*, 'traceur:dev'*/],
    callback
  );
});

// Build Dev Site 'build/www' for server build
gulp.task('dev:build', function(callback){
  runSequence(
    'clean:dev',
    ['copy:dev', 'copy:dev:lib', 'copy:dev:assets'],
    ['sass:dev:min'/*, 'traceur:dev:min'*/],
    callback
  );
});

// Run dev:build:local then start watch tasks and spin up dev server
gulp.task('dev', function(callback){
  runSequence(
    'dev:build:local',
    [/*'jshint:watch',*/ 'sass:watch'/*, 'traceur:watch'*/],
    'server:dev',
    callback
  );
});

// PROD TASKS
// Build Prod Site 'build/prod'
gulp.task('prod', ['prod:build']); // alias prod to prod:build
gulp.task('prod:build', function(callback){
  runSequence(
    'clean:prod',
    ['copy:prod', 'copy:prod:lib', 'copy:prod:assets'],
    ['sass:prod'/*, 'traceur:prod'*/],
    callback
  );
});

// MISC TASKS
// Run Both Dev and Prod with Server side by side
gulp.task('compare', function(callback){
  runSequence(
    'dev',
    'prod',
    'server:prod',
    callback
  );
});


// Make dev default
gulp.task('default', ['dev']);

