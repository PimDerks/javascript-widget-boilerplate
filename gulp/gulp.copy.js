var gulp = require('gulp')
    rename = require('gulp-rename');

module.exports.copyAssets = function () {

    var src = [];
        src.push(config.roots.src + '/' + config.paths.static + '/**/*'); // all assets
        src.push('!' + config.roots.src + '/' + config.paths.static + '/' + config.paths.sass); // ignore scss folder
        src.push('!' + config.roots.src + '/' + config.paths.static + '/' + config.paths.js); // ignore js folder
        src.push('!' + config.roots.src + '/' + config.paths.static + '/' + config.paths.sass + '/**/*'); // ignore scss files
        src.push('!' + config.roots.src + '/' + config.paths.static + '/' + config.paths.js + '/**/*'); // ignore js files

    var dest = config.roots.www + '/' + config.paths.static;

    return gulp.src(src)
        .pipe(gulp.dest(dest));

};

module.exports.copyBuildStatic = function () {

    var src = [];
        src.push(config.roots.www + '/' + config.paths.static + '/**/*');
        src.push('!' + config.roots.www + '/' + config.paths.static + '/**/*.map');

    var dest = config.roots.dest + '/' + config.paths.static;

    return gulp.src(src)
        .pipe(gulp.dest(dest));

};

module.exports.copyMedia = function () {

    var src = config.roots.src + '/' + config.paths.prototype + '/' + config.paths.media + '/**/*',
        dest = config.roots.www + '/' + config.paths.prototype + '/' + config.paths.media;

    return gulp.src(src)
        .pipe(gulp.dest(dest));

};

module.exports.copyBuildMedia = function () {

    var src = config.roots.www + '/' + config.paths.prototype + '/' + config.paths.media + '/**/*',
        dest = config.roots.dest + '/' + config.paths.prototype + '/' + config.paths.media;

    return gulp.src(src)
        .pipe(gulp.dest(dest));

};

module.exports.copyBuildHTML = function () {

var src = config.roots.www + '/**/*.html',
    dest = config.roots.dest;

return gulp.src(src)
    .pipe(gulp.dest(dest));

};

module.exports.copyUnminifiedAssets = function () {

    var src = [];
        src.push(config.roots.dest + '/' + config.paths.static + '/**/*');
        src.push('!' + config.roots.dest + '/' + config.paths.static + '/' + config.paths.css);
        src.push('!' + config.roots.dest + '/' + config.paths.static + '/' + config.paths.css + '/**/*');
        src.push('!' + config.roots.dest + '/' + config.paths.static + '/' + config.paths.img);
        src.push('!' + config.roots.dest + '/' + config.paths.static + '/' + config.paths.img + '/**/*');
        src.push('!' + config.roots.dest + '/' + config.paths.static + '/' + config.paths.js);
        src.push('!' + config.roots.dest + '/' + config.paths.static + '/' + config.paths.js + '/**/*');

    var dest = config.roots.dest + '/' + config.paths.staticMin;

    return gulp.src(src)
        .pipe(gulp.dest(dest));

};