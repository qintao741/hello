var gulp = require('gulp');
var shell = require('gulp-shell');
var gulpUtil = require('gulp-util');
var ftp = require('gulp-ftp');

gulp.task('alpha', ['build:alpha'], function () {
    var pkg = require('../../package.json');
    return gulp.src(['./dist/' + '**/*', '!' + './dist/' + 'index.html']).pipe(ftp({
        host: '10.66.16.84',
        port: 21,
        user: 'e2f',
        pass: '654321',
        remotePath: '/data/appdatas/e2f/biz-static/es/' + pkg.name
    })).pipe(gulpUtil.noop());
});

// todo: error handling
gulp.task('build:alpha', shell.task([
    'npm run dist-alpha'
]));


var eslint = require('gulp-eslint');
gulp.task('eslint',['build:alpha'],function(){

    return gulp.src(['./dist/entry.js']) //指定的校验路径

        .pipe(eslint({configFle:"./.eslintrc.json"})) //使用你的eslint校验文件

        .pipe(eslint.format())

});


