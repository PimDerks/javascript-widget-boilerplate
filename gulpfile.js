var gulp = require('gulp'),
    config = require('./gulp/gulp.config'),
    bs = require('browser-sync').create(),
    seq = require('run-sequence');

// require
var clean = require('./gulp/gulp.clean'),
    copy = require('./gulp/gulp.copy'),
    html = require('./gulp/gulp.html'),
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
gulp.task('js-browserify', js.browserify);

// HTML tasks
gulp.task('html-copy', html.copy);
gulp.task('html-watch', html.watch);

// SASS tasks
gulp.task('sass-copy', sass.copy);
gulp.task('sass-watch', sass.watch);

// Overall watch
gulp.task('www-watch', watchWWW);
gulp.task('watch', ['js-watch', 'sass-watch', 'html-watch', 'www-watch']);

// Copy
gulp.task('www-copy', copy.copy);

// Concat shims
gulp.task('shim', concat.shim);

// Automatically update files in browser
gulp.task('browser-sync', browserSync);

// Minify CSS, JS and images
gulp.task('css-minify', minify.minifyCSS);
gulp.task('js-minify', minify.minifyJS);
gulp.task('minify', ['css-minify', 'js-minify']);

// Initial
gulp.task('initial', function() {
    seq('clean', 'js', 'sass', 'html');
});

// dev
gulp.task('dev', function() {
    seq('watch', 'browser-sync');
});

// build html
gulp.task('html', function() {
    seq('html-copy');
});

// build js
gulp.task('js', function() {
    seq('js-browserify');
});

// build sass
gulp.task('sass', function() {
    seq('sass-copy')
});

// build
gulp.task('build', function() {
    seq('www-copy', 'minify');
});


