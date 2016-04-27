'use strict';

//import AppController from './app-controller';
//import SidenavService from './sidenav/sidenav-service';
//import MediaService from './media/media-service';

const AppController = require('./app-controller');
const SidenavService = require('./sidenav/sidenav-service');
const MediaService = require('./media/media-service');

const coreModule = angular.module('dfs.core', ['ngMaterial'])
	.service('sidenavService', SidenavService)
	.service('mediaService', MediaService)
	.controller('AppController', AppController);

module.exports = coreModule;
