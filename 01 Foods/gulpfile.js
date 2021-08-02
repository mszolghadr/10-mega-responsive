var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var gls = require('gulp-live-server');
var watch = require('gulp-watch');

gulp.task('serve', gulp.parallel(watchSass, function () {
    //1. serve with default settings
    // buildStyles();

    var server = gls.static('.', 3000); //equals to gls.static('public', 3000);
    server.start();
    //use gulp.watch to trigger server actions(notify, start or stop)
    watch(['**/*.css', '**/*.html', '**/*.js'], function (file) {
        server.notify.apply(server, [file]);
    });
}));

function buildStyles() {
    return gulp.src('styles/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('styles/css'));
};

function watchSass() {
    gulp.watch('./styles/scss/**/*.scss', gulp.parallel(buildStyles));
};