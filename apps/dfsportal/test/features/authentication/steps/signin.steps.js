'use strict';

module.exports = function () {

	let signInPage;

	this.Before(function () {
		signInPage = this.page('signin');
	});

	this.Given(/^I have visited the sign in page$/, function (done) {
		signInPage.visit()
			.then(() => done());
	});

	this.Given(/^I have entered my single DPA profile credentials$/, function (done) {
		signInPage.enterCredentials('rogerio_carvalho_dfs@dell.com.dfs.dev5', 'Password01!')
			.then(() => done());
	});

	this.When(/^I sign in$/, function (done) {
		signInPage.signIn()
			.then(() => done());
	});

	this.Then(/^I should land on the secured site$/, function (done) {
		const securedPage = this.page('secured-generic');
		browser.driver.getTitle().should.eventually.be.eq(securedPage.title)
			.notify(done);
	});
};
