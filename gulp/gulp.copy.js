var gulp = require('gulp'),
    config = require('./gulp.config');

module.exports.copy = function () {

var src = config.roots.www + '/**/*',
    dest = config.roots.dest;

return gulp.src(src)
    .pipe(gulp.dest(dest));

};