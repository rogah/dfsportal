'use strict';

const gulp = require('gulp');

const paths = require('../paths');

/**
 * Watch files in project and trigger specific tasks.
 *
 * @return {Stream}
 */
gulp.task('watch', () => {
	gulp.watch(paths.app.styles, ['sass']);
	gulp.watch(paths.app.scripts.concat(paths.test.files), ['lint', 'test']);
});
