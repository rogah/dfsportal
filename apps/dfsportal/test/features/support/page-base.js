'use strict';

class PageBase {

	constructor(browser, element) {
		this.browser = browser;
		this.element = element;
	}

	visit() {
		return this.browser.driver.get(`${this.browser.baseUrl}${this.path}`);
	}
}

module.exports = PageBase;
