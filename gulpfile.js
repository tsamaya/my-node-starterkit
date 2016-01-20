'use strict';
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gulpJasmine = require('gulp-jasmine');

function lint() {
  return gulp.src(['src/**/*.js',
      'spec/**/*.js',
      '.*.js',
      '*.js'
    ])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
}

function test() {
  return gulp.src('spec/**/*Spec.js')
    .pipe(gulpJasmine());
}

gulp.task('lint', lint);
gulp.task('test', ['lint'], test);
gulp.task('default', ['test']);
