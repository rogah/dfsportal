'use strict';

class AppController {

	/* @ngInject */
	constructor(sidenavService) {
		this.sidenavService = sidenavService;
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
		return this.sidenavService.isMedia(expression);
	}
}

export default AppController;
