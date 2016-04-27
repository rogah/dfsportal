'use strict';

const DellTheme = require('./dell-theme');

const themeModule = angular.module('dfs.theme', ['ngMaterial'])
	.config( /* @ngInject */ ($mdThemingProvider) => {
		DellTheme.apply($mdThemingProvider);
	});

module.exports = themeModule;
