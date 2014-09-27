
var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    rename  = require('gulp-rename'),
    paths   = require('../config.paths.js'),

// Paths
    root        = paths.rootDir,
    devRoot     = paths.devDir,
    prodRoot    = paths.prodDir,
    toCopy      = paths.symlink,
    lib         = paths.lib,
    assetPaths  = paths.assets;

// Dev Copy Tasks
// copy js files
gulp.task('copy:dev', function(){
  return gulp.src(toCopy, {cwd: root, base:'app'})
    .pipe(plumber())
    .pipe(gulp.dest(devRoot));
});
// Copy lib for dev
gulp.task('copy:dev:lib', function(){
  return gulp.src(lib.src, {cwd: root})
    .pipe(plumber())
    .pipe(gulp.dest(lib.dev));
});
// Copy assets for dev
gulp.task('copy:dev:assets', function(){
  return gulp.src(assetPaths.src, {cwd: root, base:'app/assets'})
    .pipe(plumber())
    .pipe(gulp.dest(assetPaths.dev));
});


// Prod Copy Tasks
// Copy files for prod instead of symlinking
gulp.task('copy:prod', function(){
  return gulp.src(toCopy, {cwd: root, base:'app'})
    .pipe(plumber())
    .pipe(gulp.dest(prodRoot));
});

// Copy asset files for prod
gulp.task('copy:prod:assets', function(){
  return gulp.src(assetPaths.src, {cwd: root, base:'app/assets'})
    .pipe(plumber())
    .pipe(gulp.dest(assetPaths.prod));
});

// Copy Library Files
gulp.task('copy:prod:lib', function(){
  return gulp.src(lib.min, {cwd: root})
    .pipe(plumber())
    .pipe(rename(function(path){
      //console.log('basename: ' + path.basename, (/\.min/g).test(path.basename) && !(/\.map$/g).test(path.extname));
      if( (/\.min/g).test(path.basename) && !(/\.map$/g).test(path.extname) ){
        path.basename = path.basename.replace(/\.min/, '');
      }
    }))
    .pipe(gulp.dest(lib.prod));
});

