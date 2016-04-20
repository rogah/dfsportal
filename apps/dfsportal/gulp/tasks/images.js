'use strict';

const gulp = require('gulp');
const size = require('gulp-size');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');

const paths = require('../paths');

/**
 * The 'images' task optimize and copies images to `build/dist` directory.
 *
 * @return {Stream}
 */
gulp.task('images', () => {
	return gulp.src(paths.app.images)
		.pipe(cache(imagemin({
			progressive: true,
			interlaced: true
		})))
		.pipe(gulp.dest(paths.dist.images))
		.pipe(size({ title: 'images' }));
});
