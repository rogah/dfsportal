'use strict';

const PageFactory = require('../../features/support/page-factory');

describe('Page Factory', () => {
	it('should', () => {
		const pageFactory = new PageFactory({}, {});
		const page = pageFactory.create('signin');
		page.title.should.be.eq('Sign In | Dell Financial Services');
	})
});
