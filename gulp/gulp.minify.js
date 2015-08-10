var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    base64 = require('gulp-base64');

module.exports.minifyCSS = function() {

    var src = config.roots.dest + '/' + config.paths.static + '/' + config.paths.css + '/**/*.css',
        dest = config.roots.dest + '/' + config.paths.staticMin + '/' + config.paths.css;

    return gulp.src(src)
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(dest));

};

module.exports.minifyJS = function() {

    var src = config.roots.dest + '/' + config.paths.static + '/**/*.js',
        dest = config.roots.dest + '/' + config.paths.staticMin;

    return gulp.src(src)
        .pipe(uglify())
        .pipe(gulp.dest(dest));

};

module.exports.minifyImg = function () {

    var src = config.roots.dest + '/' + config.paths.static + '/' + config.paths.img + '/*',
        dest = config.roots.dest + '/' + config.paths.staticMin + '/' + config.paths.img;

    return gulp.src(src)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(dest));

};