'use strict';

class AppController {

	/* @ngInject */
	constructor(sidenavService, mediaService) {
		this.sidenavService = sidenavService;
		this.mediaService = mediaService;
		this.accounts = this.getAccounts();
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

	getAccounts() {
		return [
			{ name: 'My DPA - 5303', type: 'DPA', description: 'Dell Preferred Account', status: 'Active', currentBalance: '$999,999.99', paymentDueAmount: '$999,999.99', paymentDueDate: '06/10/2016' },
			{ name: 'NY Branch - 2801', type: 'DBC', description: 'Dell Business Account', status: 'Active', currentBalance: '$999,999.99', paymentDueAmount: '$999,999.99', paymentDueDate: '08/03/2016' },
			{ name: 'TX Branch - 2802', type: 'DBC', description: 'Dell Business Account', status: 'Past Due', currentBalance: '$999,999.99', paymentDueAmount: '$999,999.99', paymentDueDate: '07/15/2016' },
			{ name: 'Heroku Enterprise - 7895', type: 'Lease', description: 'Dell Lease Account', status: 'Active', currentBalance: '$999,999.99', paymentDueAmount: '$999,999.99', paymentDueDate: '06/01/2016' },
			{ name: 'Heroku Enterprise - 7896', type: 'Lease', description: 'Dell Lease Account', status: 'Active', currentBalance: '$999,999.99', paymentDueAmount: '$999,999.99', paymentDueDate: '06/01/2016' },
			{ name: 'Heroku Enterprise - 7897', type: 'Lease', description: 'Dell Lease Account', status: 'Active', currentBalance: '$999,999.99', paymentDueAmount: '$999,999.99', paymentDueDate: '06/01/2016' },
			{ name: 'Heroku Enterprise - 7898', type: 'Lease', description: 'Dell Lease Account', status: 'Active', currentBalance: '$999,999.99', paymentDueAmount: '$999,999.99', paymentDueDate: '06/01/2016' },
			{ name: 'Loan - 2232', type: 'Loan', description: 'Dell Loan Account', status: 'Active', currentBalance: '$999,999.99', paymentDueAmount: '$999,999.99', paymentDueDate: '05/20/2016' }
		];
	}
}

module.exports = AppController;
