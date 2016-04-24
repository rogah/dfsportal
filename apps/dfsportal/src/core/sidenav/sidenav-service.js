'use strict';

class SidenavService {

	/* @ngInject */
	constructor($mdMedia, $mdSidenav) {
		this.$mdMedia = $mdMedia;
		this.$mdSidenav = $mdSidenav;
	}

	toggle(sidenavId) {
		console.log(sidenavId);
		console.log(this.isOpen(sidenavId));
		this.$mdSidenav(sidenavId).toggle();
	}

	isOpen(sidenavId) {
		return this.$mdSidenav(sidenavId).isOpen();
	}

	isMedia(expression) {
		return this.$mdMedia(expression);
	}
}

export default SidenavService;
