'use strict';

const path = require('path');

const root = path.dirname(__dirname);
const sfdcRoot = path.resolve(root, '../../');

const paths = {
	/**
	 * The 'root' path for the project.
	 */
	root,
	/**
	 * The 'root' path for the parent SFDC project (root of the branch repository).
	 */
	sfdcRoot,
	/**
	 * The 'gulpfile' file is where our run tasks are hold.
	 */
	gulpfile: [`${root}/gulpfile.js`, `${root}/gulp/**/*.js`],
	/**
	 * This is a collection of file patterns that refer to our app code (the
	 * stuff in `src/`). These file paths are used in the configuration of
	 * build tasks.
	 *
	 * - 'styles'       contains all project scss styles
	 * - 'images'       contains all project images
	 * - 'fonts'        contains all project fonts
	 * - 'scripts'      contains all project app javascript files
	 * - 'json'      		contains all project app javascript files
	 */
	app: {
		basePath: `${root}/src/`,
		scripts: [`${root}/src/**/*.js`],
		fonts: `${root}/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}`,
		styles: `${root}/assets/styles/**/*.scss`,
		images: `${root}/assets/images/**/*.{png,gif,jpg,jpeg}`,
		json: `${root}/data/**/*.json`
	},

	test: {
		basePath: `${root}/test/`,
		files: [`${root}/test/**/*.js`],
		unit: `${root}/test/specs/**/*.spec.js`,
		e2e: `${root}/test/features/**/*.features`
	},
	/**
	 * The 'tmp' folder is where our html templates are compiled to JavaScript during
	 * the build process and then they are concatenating with all other js files and
	 * copy to 'dist' folder.
	 */
	tmp: {
		basePath: `${root}/.tmp/`,
		staticresources: `${root}/.tmp/staticresources/`,
		package: {
			basePath: `${root}/.tmp/pkg/`,
			src: `${root}/.tmp/pkg/src/`,
			staticresources: `${root}/.tmp/pkg/src/staticresources/`
		}
	},
	/**
	 * The 'build' folder is where our app resides once it's
	 * completely built.
	 *
	 * - 'dist'         application distribution production code
	 * - 'scripts'     	application javascripts
	 * - 'json'         application json data
	 * - 'fonts'       	application distribution source code
	 * - 'images'      	application distribution source code
	 * - 'styles'       application distribution source code
	 * - 'docs'         application documentation
	 * - 'testReports'	application test report results
	 */
	dist: {
		basePath: `${root}/dist/`,
		scripts: `${root}/dist/`,
		json: `${root}/dist/data/`,
		fonts: `${root}/dist/fonts/`,
		images: `${root}/dist/images/`,
		styles: `${root}/dist/styles/`
	},

	staticresources: {
		basePath: `${sfdcRoot}/src/staticresources/`
	},

	resourceBundles: {
		basePath: `${sfdcRoot}/resource-bundles/`
	}
};

module.exports = paths;
