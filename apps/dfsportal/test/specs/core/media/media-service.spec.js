'use strict';

const sinon = require('sinon');

const MediaService = require('../../../../src/core/media/media-service');

describe('Media Service', () => {

	describe('#isMedia', () => {
		it('should pass media expression to #isMedia() of underneath dependecy service', () => {
			const $mdMediaSpy = sinon.spy();

			const mediaService = new MediaService($mdMediaSpy);
			mediaService.isMedia('gt-xs');

			$mdMediaSpy.calledWith('gt-xs').should.be.true;
		});

		it('should return #isMedia() of underneath dependecy service boolean result', () => {
			const $mdMediaStub = sinon.stub().returns(true);

			const mediaService = new MediaService($mdMediaStub);
			mediaService.isMedia('sm').should.be.true;
		});
	});
});
