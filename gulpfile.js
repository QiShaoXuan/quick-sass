const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('default', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch',['default'], function () {
  gulp.watch('./src/**/*.scss', ['default']);
});
