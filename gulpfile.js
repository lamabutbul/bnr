'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const es = require('event-stream');
const sourcemaps = require('gulp-sourcemaps');
const insert = require('gulp-insert');
const path = require('path');
const fs = require('fs')

const jsVendors = [
    './bower_components/angular/angular.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js',
];

const jsAssets = [
    './resources/assets/**/*.module.js',
    './resources/assets/**/*.service.js',
    './resources/assets/**/*.component.js',
    './resources/assets/**/*.directive.js',
    './resources/assets/main.js',
];

const appHtml = [
    './resources/assets/**/*.html',
];

gulp.task('build', function(){
    return es.merge([
        buildVendors(),
        buildApp(),
    ]);
});

gulp.task('build:vendors', function(){
    return es.merge([
        buildVendors(),
    ]);
});

gulp.task('build:app', function(){
    return es.merge([
        buildApp(),
    ]);
});

gulp.task('watch', function(){
    gulp.watch(jsAssets.concat(appHtml), ['build:app']);
});

function buildVendors() {
    return gulp.src(jsVendors)
        .pipe(sourcemaps.init())
        .pipe(concat('vendors.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/js/'))
    ;
}

function buildApp() {
    return gulp.src(jsAssets)
        .pipe(sourcemaps.init())
        .pipe(insert.transform((contents, file) => {
            let result = /(require\(['"](.*)["']\))/.exec(contents);
            if (result) {
                let d = fs.readFileSync(path.dirname(file.path) + '/' + result[2], 'utf-8');
                contents = contents.replace(result[1], '`' + d + '`');
            }
            return contents;
        }))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/js/'))
    ;
}
