'use strict';

const through = require('through2');
const gutil = require('gulp-util');
const path = require('path');

const STATICRESOURCE_TEMPLATE = `<?xml version="1.0" encoding="UTF-8"?>
<StaticResource xmlns="http://soap.sforce.com/2006/04/metadata">
	<cacheControl>Public</cacheControl>
	<contentType>application/zip</contentType>
</StaticResource>`;

/**
 * Gulp plugin that copies staticresources and creates the file matadata.
 *
 * var staticresource = require('./staticresource');
 * 
 * return gulp.src('./src/*.resource')
 *	.pipe(staticresource())
 *	.pipe(gulp.dest(./dist));
 */
module.exports = function staticresource() {

	const transform = function (file, encoding, callback) {
		if (file.isNull()) {
			return callback(null, file);
		}

		const extension = path.extname(file.path);
		if (extension.toLowerCase() !== '.resource') {
			return callback(null, file);
		}

		const filename = path.basename(file.path);

		const metadataFile = new gutil.File({
			base: __dirname,
			cwd: __dirname,
			path: path.join(__dirname, `${filename}-meta.xml`),
			contents: new Buffer(STATICRESOURCE_TEMPLATE)
		});

		// add original input file
		this.push(file);

		// add metadata for given input file
		this.push(metadataFile);

		callback();
	};

	return through.obj(transform);
};
