
var gulp    = require('gulp'),
    path    = require('path'),
    plumber = require('gulp-plumber'),
    symlink = require('gulp-symlink'),
    paths   = require('../config.paths.js'),

// Paths
    root      = paths.rootDir,
    devRoot   = paths.devDir,
    toLink    = paths.symlink,
    assets    = paths.assets,
    lib       = paths.lib;


// Symlink JS and HTML for dev build
gulp.task('symlink', function(){
  return gulp.src(toLink, {cwd: root, read:false, base:'app'})
    .pipe(plumber())
    .pipe(symlink(function(file){
      return path.join(devRoot, file.relative);
    }));
});

// Symlink Library Files
gulp.task('symlink:lib', function(){
  return gulp.src(lib.src, {cwd: root, read:false})
    .pipe(plumber())
    .pipe(symlink(function(file){

      /*
      for(var p in file){
        if(file.hasOwnProperty(p)){
          console.log('prop: ' + p + ' val: ' + file[p]);
        }
      }
      //console.log(path.basename(file.path));
      //console.log(file);
      */

      return path.join(lib.dev, path.basename(file.path));
    }));
});

// Symlink Assets Folder
gulp.task('symlink:assets', function(){
  return gulp.src(assets.src, {cwd: root, read:false, base:'app/assets'})
    .pipe(plumber())
    .pipe(symlink(assets.dev));
    /*.pipe(symlink(function(file){
      return path.join(devRoot, file.relative);
    }));*/
});


gulp.task('symlink:all', ['symlink', 'symlink:lib', 'symlink:assets']);

