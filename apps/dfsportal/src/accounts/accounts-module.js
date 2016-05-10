'use strict';

const AccountsListController = require('./accounts-list/accounts-list-controller');

const accountsModule = angular.module('dfs.accounts', ['ui.router'])
	.controller('AccountsListController', AccountsListController)
	.config( /* @ngInject */ ($stateProvider, $urlRouterProvider, sfConfig) => {
		$urlRouterProvider.otherwise("/accounts");

		$stateProvider.state('accounts', {
			url: '/accounts',
			views: {
				'content': {
					templateUrl: `${sfConfig.sitePrefix}/DfsAccountsTmpl`
				}
			}
		});
	});

module.exports = accountsModule;
