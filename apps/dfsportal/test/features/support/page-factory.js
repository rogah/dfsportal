'use strict';

class PageFactory {

	constructor(browser, element) {
		this.browser = browser;
		this.element = element;
	}

	create(pageName) {
		const Page = require(`./pages/${pageName}-page`);
		return new Page(this.browser, this.element);
	}
}

module.exports = PageFactory;
