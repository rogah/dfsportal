'use strict';

import coreModule from './core/core-module';
import themeModule from './theme/theme-module';
import usersModule from './users/users-module';
import accountsModule from './accounts/accounts-module';
import paymentsModule from './payments/payments-module';

const app = angular.module('dfs', [
	coreModule.name,
	themeModule.name,
	usersModule.name,
	accountsModule.name,
	paymentsModule.name
]);

export default app;
