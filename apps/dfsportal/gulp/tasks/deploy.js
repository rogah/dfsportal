'use strict';

const gulp = require('gulp');
const zip = require('gulp-zip');
const size = require('gulp-size');
const file = require('gulp-file');
const forceDeploy = require('gulp-jsforce-deploy');

const path = require('path');
const nconf = require('nconf');

const paths = require('../paths');
const constants = require('../constants');

const resourceBaseName = path.basename(constants.RESOURCE_NAME, '.resource');

const MANIFEST_TEMPLATE = `<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>${resourceBaseName}</members>
		<name>StaticResource</name>
	</types>
	<version>36.0</version>
</Package>`;

nconf.argv()
	.env()
	.file({ file: `${paths.root}/.env` });

gulp.task('package:manifest', () => {
	const manifestName = 'package.xml';

	return file(manifestName, MANIFEST_TEMPLATE, { src: true })
		.pipe(gulp.dest(paths.tmp.package.src))
		.pipe(size({ title: `Creating ${manifestName}` }));
});

gulp.task('package:staticresource', () => {
	return gulp.src(`${paths.staticresources.basePath}${constants.RESOURCE_NAME}*`)
		.pipe(gulp.dest(paths.tmp.package.staticresources))
		.pipe(size({ title: `Packing ${constants.RESOURCE_NAME}` }));
});

gulp.task('deploy', ['package:manifest', 'package:staticresource'], () => {
	const packageName = 'package.zip';

	return gulp.src(`${paths.tmp.package.basePath}**/*`)
		.pipe(zip(packageName))
		.pipe(size({ title: `Deploying ${packageName}` }))
		.pipe(forceDeploy({
			loginUrl: nconf.get('sfdc:loginUrl'),
			username: nconf.get('sfdc:username'),
			password: nconf.get('sfdc:password'),
			pollTimeout: nconf.get('sfdc:pollTimeout'),
			pollInterval: nconf.get('sfdc:pollInterval'),
			version: nconf.get('sfdc:version')
		}));
});
