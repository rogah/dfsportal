'use strict';

const SecuredPageBase = require('../secured-page-base');

class GenericSecuredPage extends SecuredPageBase {

	get title() {
		return 'Dell Financial Services';
	}

	get path() {
		return '/secured';
	}

	get pageLocator() {
		return by.css('html[ng-app=dfs]');
	}

	isPageReady() {
		return this.browser.wait(() => {
			return this.browser.driver.isElementPresent(this.pageLocator);
		});
	}
}

module.exports = GenericSecuredPage;
