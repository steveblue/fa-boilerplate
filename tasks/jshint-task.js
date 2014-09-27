
var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    watch   = require('gulp-watch'),
    paths   = require('../config.paths.js'),
    notify  = require('gulp-notify'),
    nn      = new require('node-notifier')(),
    //exec    = require('child_process').exec,

// Paths
    root        = paths.rootDir,
    lintPaths   = paths.jshint,

// Options
    standardNotification = {
      title: 'JSHint Error',
      message: function(file){
        if(file.jshint.success){ return false; }
        var errors = file.jshint.results.map(function(data){
          if(data.error){
            return '(' + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
          }
        }).join('\n');
        return file.relative + ' (' + file.jshint.results.length + ' errors)\n' + errors;
      }
    },

// Notification that skips console log
    notifyNoConsole = notify.withReporter(function(options, callback){
      nn.notify(options);
      callback();
    });
notifyNoConsole.logLevel(0);


// JSHint task for running from command line


// Lint App Files
gulp.task('jshint', ['jshint:app']);

// Lint All Files
gulp.task('jshint:all', function(){
  return gulp.src(lintPaths.all, {cwd: root})
    .pipe(jshint(lintPaths.rc))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(notify(standardNotification));
});

// Lint App Files
gulp.task('jshint:app', function(){
  return gulp.src(lintPaths.app, {cwd: root})
    .pipe(jshint(lintPaths.rc))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(notify(standardNotification));
});


// WATCH
// JSHint task for running with live-reload server
// TODO: THIS TASK IS BROKEN!!!
//    currently the jshint:app task is called when livereload happens
gulp.task('jshint:watch', function() {

  // HACK! :( need to keep an eye on gulp-watch and update it to see if the error gets fixed
  //exec('[ $(ulimit -n) -lt 2560 ] && ulimit -n 2560 && echo "upped limit: $(ulimit -n)"', function(error, stdout, stderr){
    //console.log(stdout);
  //}));

  return watch(lintPaths.app, function(files){
    return files
      .pipe(jshint(lintPaths.rc))
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(notifyNoConsole(standardNotification));
  });
});


