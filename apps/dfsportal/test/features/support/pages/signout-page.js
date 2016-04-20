'use strict';

const PageBase = require('../page-base');

class SignOutPage extends PageBase {

	get path() {
		return '/secur/logout.jsp';
	}

	get pageLocator() {
		return by.id('logoutBody');
	}

	isPageReady() {
		return this.browser.wait(() => {
			return this.browser.driver.isElementPresent(this.pageLocator);
		});
	}
}

module.exports = SignOutPage;
