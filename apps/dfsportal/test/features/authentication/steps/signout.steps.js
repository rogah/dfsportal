'use strict';

module.exports = function () {

	let genericSecuredPage;

	this.Before(function () {
		genericSecuredPage = this.page('secured-generic');
	});

	this.When(/^I sign out$/, function (done) {
		genericSecuredPage.isPageReady()
			.then(() => genericSecuredPage.signOut())
			.then(() => done());
	});

	this.Then(/^I should be redirected back to the Sign In page$/, function (done) {
		const signInPage = this.page('signin');
		signInPage.visit()
			.then(() => signInPage.isPageReady())
			.then(() => {
				browser.driver.getTitle().should.eventually.be.eq(signInPage.title)
					.notify(done);
			});
	});
};
