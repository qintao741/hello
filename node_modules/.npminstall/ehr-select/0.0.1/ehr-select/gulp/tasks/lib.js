var gulp = require('gulp');
var babel = require('gulp-babel');
var constants = require('../../constants');
var del = require('del');
var less = require('gulp-less');

gulp.task('lib', ['lib:clean', 'lib:less'], function() {
    return gulp.src(constants.SRC_DIR + '/select/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest(constants.LIB_DIR));
});

gulp.task('lib:clean', function(done) {
    del([constants.LIB_DIR], done);
});

gulp.task('lib:less', function() {
    return gulp.src(constants.SRC_DIR + '/less/select.less')
        .pipe(less())
        .pipe(gulp.dest(constants.LIB_DIR));
});
