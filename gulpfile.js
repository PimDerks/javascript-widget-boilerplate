var gulp = require('gulp'),
    config = require('./gulp/gulp.config'),
    bs = require('browser-sync').create(),
    seq = require('run-sequence');

// require
var clean = require('./gulp/gulp.clean'),
    concat = require('./gulp/gulp.concat'),
    watchWWW = require('./gulp/gulp.watchWWW')(bs),
    sass = require('./gulp/gulp.sass'),
    minify = require('./gulp/gulp.minify'),
    browserSync = require('./gulp/gulp.browsersync')(bs),
    js = require('./gulp/gulp.javascript');

// Remove temp/www dir
gulp.task('clean', clean);

// Javascript tasks
gulp.task('js-copy', js.copy);
gulp.task('js-watch', js.watch);

// SASS tasks
gulp.task('sass-copy', sass.copy);
gulp.task('sass-watch', sass.watch);

// Overall watch
gulp.task('www-watch', watchWWW);
gulp.task('watch', ['js-watch', 'sass-watch', 'html-watch', 'www-watch']);

// Concat shims
gulp.task('shim', concat.shim);

// Inline assets
gulp.task('inline', inline);

// Automatically update files in browser
gulp.task('browser-sync', browserSync);

// Minify CSS, JS and images
gulp.task('minifyCSS', minify.minifyCSS);
gulp.task('minifyJS', minify.minifyJS);

// Initial
gulp.task('initial', function() {
    seq('clean', 'js', 'sass');
});

// dev
gulp.task('dev', function() {
    seq('watch', 'browser-sync');
});

// build js
gulp.task('js', function() {
    seq('js-copy');
});

// build sass
gulp.task('sass', function() {
    seq('sass-copy')
});

// build
gulp.task('build', function() {
    seq('copy-www-static', 'copy-www-media', 'minify', 'inline', 'amd');
});


