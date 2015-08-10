var gulp = require('gulp'),
    rename = require('gulp-rename');
    sourcemaps = require('gulp-sourcemaps'),
    config = require('./gulp.config'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs');

module.exports.copy = function(){

    var src = [];
        src.push(config.roots.src + '/**/*.js');
        src.push('!' + config.roots.src + '/' + config.paths.modules);
        src.push('!' + config.roots.src + '/' + config.paths.modules + '/**/*');
        src.push('!' + config.roots.src + '/' + config.paths.static + '/' + config.paths.js + '/' + config.paths.shim);
        src.push('!' + config.roots.src + '/' + config.paths.static + '/' + config.paths.js + '/' + config.paths.shim + '/**/*');

    var dest = config.roots.www;

    // all files in root of /scss/
    return gulp.src(src)
        .pipe(gulp.dest(dest));

};

module.exports.watch = function() {

    // Watch js files. Tasks are defined in the main gruntfile.
    gulp.watch(config.roots.src + '/**/*.js', ['js-copy']);

};