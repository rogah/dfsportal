'use strict';

module.exports = function () {

	this.setDefaultTimeout(180 * 1000);

	this.World = require('./world').World;
};
