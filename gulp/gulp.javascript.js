var gulp = require('gulp'),
    rename = require('gulp-rename');
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('./gulp.config');

module.exports.browserify = function(){

    var src = config.roots.src + '/' + config.paths.static + '/' + config.paths.js,
        dest = config.roots.www + '/' + config.paths.static + '/' + config.paths.js;

    // set up the browserify instance on a task basis
    var b = browserify({
        entries: src + '/app.js',
        debug: true
    });

    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest));

};

module.exports.watch = function() {

    // Watch js files. Tasks are defined in the main gruntfile.
    gulp.watch(config.roots.src + '/**/*.js', ['js-browserify']);

};