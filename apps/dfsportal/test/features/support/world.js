'use strict';

const chai = require('chai');

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
require('chai').should();

const PageFactory = require('./page-factory');

const World = function World() {
	const factory = new PageFactory(browser, element);

	this.page = function (pageName) {
		return factory.create(pageName);
	};
};

exports.World = World;
