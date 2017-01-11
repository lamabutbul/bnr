'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const es = require('event-stream');
const sourcemaps = require('gulp-sourcemaps');

const jsVendors = [
    './bower_components/angular/angular.js',
];

const jsAssets = [
    './resources/assets/**/*.module.js',
    './resources/assets/**/*.service.js',
    './resources/assets/**/*.component.js',
    './resources/assets/**/*.directive.js',
    './resources/assets/main.js',
];

gulp.task('build', function() {
    let vendorsStream = gulp.src(jsVendors)
        .pipe(sourcemaps.init())
        .pipe(concat('vendors.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/js/'))
    ;

    let appStream = gulp.src(jsAssets)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/js/'))
    ;

    return es.merge([
        vendorsStream,
        appStream,
    ]);
});
