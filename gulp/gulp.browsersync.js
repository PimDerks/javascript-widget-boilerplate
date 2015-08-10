var gulp = require('gulp'),
    config = require('./gulp.config');

module.exports = function(browserSync){

    return function(){

        browserSync.init({
            server: {
                baseDir: config.roots.www
            },
            open: false
        });

    }

};