'use strict';

class MediaService {

	/* @ngInject */
	constructor($mdMedia) {
		this.$mdMedia = $mdMedia;
	}

	isMedia(expression) {
		return this.$mdMedia(expression);
	}
}

module.exports = MediaService;
