'use strict';
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
/*jshint -W079 */
var jasmine = require('gulp-jasmine');
/*jshint +W079 */
var cover = require('gulp-coverage');

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
    .pipe(cover.instrument({
      pattern: ['src/**/*.js'],
      debugDirectory: 'debug'
    }))
    .pipe(jasmine())
    .pipe(cover.gather())
    .pipe(cover.format())
    .pipe(gulp.dest('coverage'));
}

gulp.task('lint', lint);
gulp.task('test', ['lint'], test);
gulp.task('default', ['test']);
