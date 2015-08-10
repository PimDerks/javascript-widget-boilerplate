var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    config = require('./gulp.config');

module.exports.minifyCSS = function() {

    var src = config.roots.www + '/' + config.paths.static + '/' + config.paths.css + '/**/*.css',
        dest = config.roots.dest + '/' + config.paths.static + '/' + config.paths.css;

    return gulp.src(src)
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(dest));

};

module.exports.minifyJS = function() {

    var src = config.roots.www + '/' + config.paths.static + '/**/*.js',
        dest = config.roots.dest + '/' + config.paths.static;

    return gulp.src(src)
        .pipe(uglify())
        .pipe(gulp.dest(dest));

};