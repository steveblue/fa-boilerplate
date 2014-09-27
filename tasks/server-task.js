
var gulp      = require('gulp'),

    fs          = require('fs'),
    http        = require('http'),
    connect     = require('connect'),
    st          = require('st'),
    livereload  = require('gulp-livereload'),

    watch     = require('gulp-watch'),
    nn        = new require('node-notifier')(),
    notify    = require('gulp-notify'),
    paths     = require('../config.paths.js'),

// Paths
    root      = paths.rootDir,
    devRoot   = paths.devDir,
    prodRoot  = paths.prodDir,

// Options
    options = {
      dev: {
        host  : "localhost",
        port  : 9000,
        watch : devRoot + '/**',
        st    : {
          path        : devRoot,
          url         : '/',
          cache       : false,
          index       : 'index.html',
          dot         : false,
          passthrough : true,
          qzip        : false
        }
      },
      prod: {
        host  : "localhost",
        port  : 9000,
        watch : [prodRoot + '/**/*.*', '!'+prodRoot+'/lib/**/*.*'],
        st    : {
          path        : prodRoot,
          url         : '/',
          cache       : false,
          index       : 'index.html',
          dot         : false,
          passthrough : true,
          gzip        : true
        }
      }
    };

// Fallback response factory function
var fallback = function(root){
  return function(req, res){
    fs.createReadStream(root+'/index.html').pipe(res);
    return true;
  };
};

// Start Development Server
gulp.task('server:dev:start', function(callback){

  // Create Connect Server
  var server = connect();

  // Add serve static middleware
  server.use( st(options.dev.st) );

  // Fallback to /index.html
  server.use(fallback(devRoot));

  // Start Server
  http.createServer(server).listen(options.dev.port);

  nn.notify({
    title:'Gulp - Dev Server',
    message: 'Dev Server Started'
  });

  callback();
});

// Start Livereload server watching options.dev.watch
gulp.task('server:lr', function(done){
  livereload.listen();
  // TODO: Remove function in watch when jshint:watch is fixed
  watch(options.dev.watch, function(files){
    gulp.start('jshint:app');
    return files.pipe( livereload() );
  });
    //.pipe( livereload() );

  done();
});

gulp.task('server:dev', ['server:dev:start', 'server:lr']);

// Simple production connect server
gulp.task('server:prod', function(callback){

  // see server:dev:start for line comments
  var server = connect();
  server.use( st(options.prod.st) );
  server.use( fallback(prodRoot) );
  http.createServer(server).listen(options.prod.port);

  nn.notify({
    title:'Gulp - Prod Server',
    message: 'Dev Server Started'
  });

  callback();
});


