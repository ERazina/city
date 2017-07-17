"use strict";

let gulp = require('gulp'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

// Browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "build"
        }
    });

    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/sass/*.scss', ['scss']);
});

// HTML
gulp.task('html', function() {
    gulp.src('src/*.html')
    .pipe(gulp.dest('./build'))
});

// SCSS
gulp.task('scss', function() {
    gulp.src('src/sass/*.scss')
        .pipe(scss().on('error', function(error) {
            console.log(error);
        }))
        .pipe(autoprefixer({
            browsers: ['last 12 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/css'));
});

gulp.task('default', function() {
	gulp.run('html');
    gulp.run('scss');
    gulp.run('browser-sync');


    gulp.watch('build/*.html').on('change', browserSync.reload);
    gulp.watch('build/css/*.css').on('change', browserSync.reload);
});