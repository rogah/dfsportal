'use strict';

const sinon = require('sinon');

const SidenavService = require('../../../../src/core/sidenav/sidenav-service');

describe('Sidenav Service', () => {

	let sidenavService;

	let $mdSidenavSpy;
	let $mdSidenavMethodsSpy;

	beforeEach(() => {
		$mdSidenavMethodsSpy = {
			toggle: sinon.spy(),
			isOpen: sinon.stub().returns(true)
		};

		$mdSidenavSpy = sinon.spy(() => {
			return $mdSidenavMethodsSpy;
		});

		sidenavService = new SidenavService($mdSidenavSpy);
	});

	describe('#toggle', () => {
		it('should pass sidenav id to underneath dependecy service', () => {
			sidenavService.toggle('left');
			$mdSidenavSpy.calledWith('left').should.be.true;
		});

		it('should call #toggle() of underneath dependecy service', () => {
			sidenavService.toggle('right');
			$mdSidenavMethodsSpy.toggle.calledOnce.should.be.true;
		});
	});

	describe('#isOpen', () => {
		it('should pass sidenav id to underneath dependecy service', () => {
			sidenavService.isOpen('top');
			$mdSidenavSpy.calledWith('top').should.be.true;
		});

		it('should return boolean from #isOpen() of underneath dependecy service', () => {
			sidenavService.isOpen('right').should.be.true;
		});
	});
});
