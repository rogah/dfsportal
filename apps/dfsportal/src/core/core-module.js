'use strict';

import AppController from './app-controller';
import SidenavService from './sidenav/sidenav-service';

const coreModule = angular.module('dfs.core', ['ngMaterial'])
	.controller('AppController', AppController)
	.service('sidenavService', SidenavService);

export default coreModule;
