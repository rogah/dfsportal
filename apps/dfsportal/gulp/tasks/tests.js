'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const mocha = require('gulp-mocha');
const protractor = require('gulp-protractor');

const paths = require('../paths');

/**
 * Watch files in project and trigger specific tasks.
 *
 * @return {Stream}
 */
gulp.task('test', () => {
	return gulp.src(paths.test.unit, {read: false})
		.pipe(mocha({
			require: ['./test/chai.js']
		}));
});

gulp.task('webdriver:update', false, protractor.webdriver_update);

gulp.task('webdriver:start', ['webdriver:update'], protractor.webdriver_standalone);

gulp.task('e2e', () => {
	return gulp.src(paths.test.basePath, {read: false})
		.pipe(protractor.protractor({ configFile: './protractor-config.js' }))
		.on('error', (e) => {
			gutil.log(e);
			return process.exit(1);
		});
});
