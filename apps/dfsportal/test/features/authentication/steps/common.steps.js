'use strict';

module.exports = function () {

	let signOutPage;
	let signInPage;

	this.Before(function () {
		signOutPage = this.page('signout');
		signInPage = this.page('signin');
	});

	this.Given(/^I am logged in with my single DPA profile$/, function (done) {
		signOutPage.visit()
			.then(() => signInPage.visit())
			.then(() => signInPage.isPageReady())
			.then(() => signInPage.enterCredentials('rogerio_carvalho_dfs@dell.com.dfs.dev5', 'Password01!'))
			.then(() => signInPage.signIn())
			.then(() => done());
	});
};
