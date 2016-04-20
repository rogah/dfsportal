'use strict';

const gulp = require('gulp');
const zip = require('gulp-zip');
const size = require('gulp-size');
const runSequence = require('run-sequence');

const staticresource = require('../plugins/staticresource');

const paths = require('../paths');
const constants = require('../constants');

gulp.task('staticresource:create', () => {
	return gulp.src([`${paths.dist.basePath}**/*`], { dot: true })
		.pipe(gulp.dest(`${paths.tmp.staticresources}${constants.RESOURCE_NAME}/`))
		.pipe(size({ title: `Creating ${constants.RESOURCE_NAME}` }));
});

gulp.task('staticresource:resourcebundles', () => {
	return gulp.src(`${paths.tmp.staticresources}**/*`)
		.pipe(gulp.dest(paths.resourceBundles.basePath))
		.pipe(size({ title: `Coping ${constants.RESOURCE_NAME} for resource-bundles/` }));
});

gulp.task('staticresource:bundle', () => {
	return gulp.src(`${paths.tmp.staticresources}${constants.RESOURCE_NAME}/**/*`)
		.pipe(zip(constants.RESOURCE_NAME))
		.pipe(staticresource())
		.pipe(gulp.dest(paths.staticresources.basePath))
		.pipe(size({ title: `Bundling ${constants.RESOURCE_NAME}` }));
});

/**
 * Bundle DellFinancialServices staticresource and create the metadata file.
 *
 * @param {Function} done - callback when complete
 */
gulp.task('bundle', (done) => {
	runSequence(
		['staticresource:create'], ['staticresource:resourcebundles', 'staticresource:bundle'],
		done
	);
});
