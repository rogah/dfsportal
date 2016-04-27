'use strict';

class SidenavService {

	/* @ngInject */
	constructor($mdSidenav) {
		this.$mdSidenav = $mdSidenav;
	}

	toggle(sidenavId) {
		this.$mdSidenav(sidenavId).toggle();
	}

	isOpen(sidenavId) {
		return this.$mdSidenav(sidenavId).isOpen();
	}
}

module.exports = SidenavService;
