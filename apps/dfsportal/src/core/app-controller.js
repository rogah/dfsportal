'use strict';

class AppController {

	/* @ngInject */
	constructor(sidenavService, mediaService) {
		this.sidenavService = sidenavService;
		this.mediaService = mediaService;
	}

	toggleSidenav(sidenavId) {
		this.sidenavService.toggle(sidenavId);
	}

	isSidenavOpen(sidenavId) {
		return this.sidenavService.isOpen(sidenavId);
	}

	isSidenavClosed(sidenavId) {
		return !this.isSidenavOpen(sidenavId);
	}

	isMedia(expression) {
		return this.mediaService.isMedia(expression);
	}
}

module.exports = AppController;
