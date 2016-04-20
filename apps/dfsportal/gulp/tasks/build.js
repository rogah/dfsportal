'use strict';

const del = require('del');
const gulp = require('gulp');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');

const paths = require('../paths');
const constants = require('../constants');

/**
 * The 'clean' task delete 'build' and '.tmp' directories.
 *
 * @param {Function} done - callback when complete
 */
gulp.task('clean', (done) => {
	const files = [].concat(
		paths.dist.basePath,
		paths.tmp.basePath,
		`${paths.resourceBundles.basePath}${constants.RESOURCE_NAME}/**`,
		`!${paths.resourceBundles.basePath}${constants.RESOURCE_NAME}`
	);
	gutil.log(`Cleaning: ${gutil.colors.blue(files)}`);
	return del(files, { force: true }, done);
});

/**
 * The 'build' task gets app ready for deployment by processing files
 * and put them into directory ready for production.
 *
 * @param {Function} done - callback when complete
 */
gulp.task('build', (done) => {
	runSequence(
		['clean'], ['scripts', 'styles', 'fonts', 'images'], ['bundle'],
		done
	);
});
