'use strict';

const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const runSequence = require('run-sequence');

const gulp = require('gulp');
const gutil = require('gulp-util');
const eslint = require('gulp-eslint');
const jsbeautifier = require('gulp-jsbeautifier');
const sourcemaps = require('gulp-sourcemaps');
const ngAnnotate = require('gulp-ng-annotate');
const uglify = require('gulp-uglify');

const paths = require('../paths');

/**
 * The 'lint' task defines the rules of our hinter as well as which files
 * we should check. It helps to detect errors and potential problems in our
 * JavaScript code.
 *
 * @return {Stream}
 */
gulp.task('js:lint', () => {
	return gulp.src(paths.app.scripts.concat(paths.gulpfile).concat(paths.test.files))
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

/**
 * The 'beautify' task enforce the JavaScript format to a coding standard.
 *
 * @return {Stream}
 */
gulp.task('js:beautify', () => {
	return gulp.src(paths.app.scripts.concat(paths.gulpfile).concat(paths.test.files), { base: './' })
		.pipe(jsbeautifier({
			config: '.jsbeautifyrc',
			mode: 'VERIFY_AND_WRITE'
		}))
		.pipe(jsbeautifier.reporter())
		.pipe(gulp.dest('./'));
});

/**
 * The 'compile:app' task compiles ES6 code into Javascript bundled file through JSPM (refer to http://jspm.io).
 *
 * @param {Function} done - callback when complete
 */
gulp.task('js:compile', (done) => {
	return browserify({
			entries: 'app.js',
			basedir: 'src/',
			debug: true
		})
		.transform('babelify', { presets: ['es2015'] })
		.bundle()
		.pipe(source('app.min.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(ngAnnotate({
			add: true,
			remove: true,
			single_quotes: true
		}))
		.pipe(uglify())
		.on('error', gutil.log)
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist/'));
});

/**
 * Lint, beautidy and compile ES6 code.
 *
 * @param {Function} done - callback when complete
 */
gulp.task('scripts', (done) => {
	runSequence(
		['js:lint'], ['js:beautify'], ['js:compile'],
		done
	);
});
