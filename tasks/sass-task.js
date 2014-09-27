
var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    rename  = require('gulp-rename'),
    sass    = require('gulp-sass'),
    neat    = require('node-neat').includePaths,
    cmq     = require('gulp-combine-media-queries'),
    notify  = require('gulp-notify'),
    nn      = new require('node-notifier')(),

// Paths
    paths   = require('../config.paths.js').sass,

// Build Options
    options = {
      dev: {
        includePaths: ['sass'].concat(neat),
        outputStyle: 'nested',
        sourceComments: 'normal'
      },
      prod: {
        includePaths: ['sass'].concat(neat),
        outputStyle: 'compressed',
        sourceComments: 'none'
      }
    },
    errorNotifier = notify.withReporter(function(options, callback){
      nn.notify(options);
      console.error('\033[31m' + options.message + '\033[0m');
      callback();
    });

// Default sass task is sass:dev
gulp.task('sass', ['sass:dev']);

// Dev styles
gulp.task('sass:dev', function () {
  return gulp.src(paths.src)
    //.pipe(plumber({errorHandler: notify.onError({title:'Sass Compile Error', message:'<%= error.message %>'})}))
    .pipe(plumber({
      errorHandler: errorNotifier.onError({
        title:'Sass Compile Error',
        message: '<%= error.message %>'
      })
    }))
    .pipe(sass(options.dev))
    .pipe(cmq({
      log: false
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(paths.dev));
});
// Dev Styles min'd
gulp.task('sass:dev:min', function () {
  return gulp.src(paths.src)
    //.pipe(plumber({errorHandler: notify.onError({title:'Sass Compile Error', message:'<%= error.message %>'})}))
    .pipe(plumber())
    .pipe(sass(options.prod))
    .pipe(cmq({
      log: false
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(paths.dev));
});


// Prod styles
gulp.task('sass:prod', function () {
  return gulp.src(paths.src)
    //.pipe(plumber())
    .pipe(plumber({
      errorHandler: errorNotifier.onError({
        title:'Sass Compile Error',
        message: '<%= error.message %>'
      })
    }))
    .pipe(sass(options.prod))
    .pipe(cmq({
      log: false
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(paths.prod));
});

// SASS task for running with live-reload server
gulp.task('sass:watch', function(){
  gulp.watch(paths.src, ['sass:dev']);
});


