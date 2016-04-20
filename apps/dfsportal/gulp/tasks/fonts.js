'use strict';

const gulp = require('gulp');
const size = require('gulp-size');
const flatten = require('gulp-flatten');
const paths = require('../paths');

/**
 * The 'fonts' task copies fonts to `build/dist` directory.
 *
 * @return {Stream}
 */
gulp.task('fonts', () => {
	return gulp.src(paths.app.fonts)
		.pipe(flatten())
		.pipe(gulp.dest(paths.dist.fonts))
		.pipe(size({ title: 'fonts' }));
});
