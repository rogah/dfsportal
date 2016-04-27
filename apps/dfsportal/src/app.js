'use strict';

const coreModule = require('./core/core-module');
const themeModule = require('./theme/theme-module');
const usersModule = require('./users/users-module');
const accountsModule = require('./accounts/accounts-module');
const paymentsModule = require('./payments/payments-module');

const app = angular.module('dfs', [
	coreModule.name,
	themeModule.name,
	usersModule.name,
	accountsModule.name,
	paymentsModule.name
]);

module.exports = app;
