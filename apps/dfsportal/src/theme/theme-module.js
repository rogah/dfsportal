'use strict';

import DellTheme from './dell-theme';

const themeModule = angular.module('dfs.theme', ['ngMaterial'])
	.config( /* @ngInject */ ($mdThemingProvider) => {
		DellTheme.apply($mdThemingProvider);
	});

export default themeModule;
