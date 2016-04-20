'use strict';

const PageBase = require('./page-base');

class SecuredPageBase extends PageBase {

	get signoutButton() {
		return this.element(by.id('signout'));
	}

	signOut() {
		return this.signoutButton.click();
	}
}

module.exports = SecuredPageBase;
