var gulp = require('gulp'),
    watch = require('gulp-watch'),
    config = require('./gulp.config');

module.exports = function(browserSync) {

    var timer;

    // watch www

    gulp.watch(config.roots.www + '/**/*').on('change', function(){

        // throttle
        if(timer){
            clearTimeout(timer);
        }

        timer = setTimeout(function(){
            browserSync.reload()
        }, 100);

    });

};