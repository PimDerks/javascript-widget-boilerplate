var gulp = require('gulp'),
    config = require('./gulp.config');

module.exports.copy = function () {

var src = config.roots.src + '/**/*.html',
    dest = config.roots.www;

return gulp.src(src)
    .pipe(gulp.dest(dest));

};

module.exports.watch = function(){

    // watch sass files
    gulp.watch(config.roots.src + '/**/*.html', ['html-copy']);

};