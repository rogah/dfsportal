'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const filter = require('gulp-filter');
const changed = require('gulp-changed');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const paths = require('../paths');

/**
 * Compile SASS files into the main.css.
 *
 * @return {Stream}
 */
gulp.task('sass', () => {
	return gulp.src(paths.app.styles)
		.pipe(changed(paths.dist.styles, { extension: '.scss' }))
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed', errLogToConsole: true }))
		.pipe(autoprefixer('last 2 version'))
		.pipe(concat('app.min.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.dist.styles))
		.pipe(filter('**/*.css'));
});

gulp.task('styles', ['sass']);
