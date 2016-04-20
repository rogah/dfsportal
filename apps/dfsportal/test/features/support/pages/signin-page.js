'use strict';

const PageBase = require('../page-base');

class SignInPage extends PageBase {

	get title() {
		return 'Sign In | Dell Financial Services';
	}

	get path() {
		return '/signin';
	}

	get pageLocator() {
		return by.id('signin-page:signin-form');
	}

	get usernameInput() {
		return this.browser.driver.findElement(by.id('signin-page:signin-form:username'));
	}

	get passwordInput() {
		return this.browser.driver.findElement(by.id('signin-page:signin-form:password'));
	}

	get signinButton() {
		return this.browser.driver.findElement(by.id('signin-page:signin-form:signin-button'));
	}

	isPageReady() {
		return this.browser.wait(() => {
			return this.browser.driver.isElementPresent(this.pageLocator);
		});
	}

	enterCredentials(username, password) {
		return this.usernameInput.sendKeys(username)
			.then(this.passwordInput.sendKeys(password));
	}

	signIn() {
		return this.signinButton.click();
	}
}

module.exports = SignInPage;
