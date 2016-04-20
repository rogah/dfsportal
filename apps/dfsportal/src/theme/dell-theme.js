'use strict';

class DellTheme {

	static apply($mdThemingProvider) {

		$mdThemingProvider.definePalette('dell-blue', {
			'50': '#cdefff',
			'100': '#81d7ff',
			'200': '#49c5ff',
			'300': '#01aeff',
			'400': '#009ae2',
			'500': '#0085c3',
			'600': '#0070a4',
			'700': '#005b86',
			'800': '#004667',
			'900': '#003149',
			'A100': '#cdefff',
			'A200': '#81d7ff',
			'A400': '#009ae2',
			'A700': '#005b86',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 300 A100 A200'
		});

		$mdThemingProvider.definePalette('dell-green', {
			'50': '#eaffc2',
			'100': '#d1ff76',
			'200': '#beff3e',
			'300': '#a3f500',
			'400': '#8ed700',
			'500': '#7ab800',
			'600': '#669900',
			'700': '#517b00',
			'800': '#3d5c00',
			'900': '#293e00',
			'A100': '#eaffc2',
			'A200': '#d1ff76',
			'A400': '#8ed700',
			'A700': '#517b00',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400'
		});

		$mdThemingProvider.definePalette('dell-red', {
			'50': '#ffffff',
			'100': '#f8dbd5',
			'200': '#efb1a5',
			'300': '#e57d68',
			'400': '#e0664e',
			'500': '#dc5034',
			'600': '#ce4024',
			'700': '#b4381f',
			'800': '#9a301b',
			'900': '#802816',
			'A100': '#ffffff',
			'A200': '#f8dbd5',
			'A400': '#e0664e',
			'A700': '#b4381f',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
		});

		$mdThemingProvider.definePalette('dell-yellow', {
			'50': '#fffefc',
			'100': '#ffe9b0',
			'200': '#ffda78',
			'300': '#ffc630',
			'400': '#ffbd12',
			'500': '#f2af00',
			'600': '#d39900',
			'700': '#b58300',
			'800': '#966d00',
			'900': '#785600',
			'A100': '#fffefc',
			'A200': '#ffe9b0',
			'A400': '#ffbd12',
			'A700': '#b58300',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 300 400 500 600 700 A100 A200 A400 A700'
		});

		$mdThemingProvider.definePalette('dell-purple', {
			'50': '#e5c4ef',
			'100': '#ca89de',
			'200': '#b65dd2',
			'300': '#9632b5',
			'400': '#822c9d',
			'500': '#6e2585',
			'600': '#5a1e6d',
			'700': '#461855',
			'800': '#33113d',
			'900': '#1f0a25',
			'A100': '#e5c4ef',
			'A200': '#ca89de',
			'A400': '#822c9d',
			'A700': '#461855',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 A100 A200'
		});

		$mdThemingProvider.definePalette('dell-dark-gray', {
			'50': '#c9c9c9',
			'100': '#a2a2a2',
			'200': '#868686',
			'300': '#636363',
			'400': '#535353',
			'500': '#444444',
			'600': '#353535',
			'700': '#252525',
			'800': '#161616',
			'900': '#070707',
			'A100': '#c9c9c9',
			'A200': '#a2a2a2',
			'A400': '#535353',
			'A700': '#252525',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 A100 A200'
		});

		$mdThemingProvider.definePalette('dell-gray', {
			'50': '#ffffff',
			'100': '#ffffff',
			'200': '#ececec',
			'300': '#c9c9c9',
			'400': '#b9b9b9',
			'500': '#aaaaaa',
			'600': '#9b9b9b',
			'700': '#8b8b8b',
			'800': '#7c7c7c',
			'900': '#6d6d6d',
			'A100': '#ffffff',
			'A200': '#ffffff',
			'A400': '#b9b9b9',
			'A700': '#8b8b8b',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 300 400 500 600 700 A100 A200 A400 A700'
		});

		$mdThemingProvider.definePalette('dell-orange', {
			'50': '#ffffff',
			'100': '#ffdcbd',
			'200': '#ffbe85',
			'300': '#ff983d',
			'400': '#ff871f',
			'500': '#ff7700',
			'600': '#e06900',
			'700': '#c25a00',
			'800': '#a34c00',
			'900': '#853e00',
			'A100': '#ffffff',
			'A200': '#ffdcbd',
			'A400': '#ff871f',
			'A700': '#c25a00',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 300 400 500 600 A100 A200 A400'
		});

		$mdThemingProvider.definePalette('dell-berry', {
			'50': '#fbeef3',
			'100': '#edb0c5',
			'200': '#e382a3',
			'300': '#d64779',
			'400': '#d02f66',
			'500': '#b7295a',
			'600': '#9e234e',
			'700': '#851e41',
			'800': '#6c1835',
			'900': '#531329',
			'A100': '#fbeef3',
			'A200': '#edb0c5',
			'A400': '#d02f66',
			'A700': '#851e41',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 A100 A200'
		});

		$mdThemingProvider.definePalette('dell-dark-red', {
			'50': '#fdebed',
			'100': '#f8a4ad',
			'200': '#f3707f',
			'300': '#ee2e44',
			'400': '#ea132b',
			'500': '#ce1126',
			'600': '#b20f21',
			'700': '#950c1c',
			'800': '#790a16',
			'900': '#5d0811',
			'A100': '#fdebed',
			'A200': '#f8a4ad',
			'A400': '#ea132b',
			'A700': '#950c1c',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 A100 A200'
		});

		$mdThemingProvider.definePalette('dell-light-gray', {
			'50': '#ffffff',
			'100': '#ffffff',
			'200': '#ffffff',
			'300': '#ffffff',
			'400': '#fdfdfd',
			'500': '#eeeeee',
			'600': '#dfdfdf',
			'700': '#cfcfcf',
			'800': '#c0c0c0',
			'900': '#b1b1b1',
			'A100': '#ffffff',
			'A200': '#ffffff',
			'A400': '#fdfdfd',
			'A700': '#cfcfcf',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
		});

		$mdThemingProvider.theme('dell-branding')
			.primaryPalette('dell-blue')
			.accentPalette('dell-green');

		$mdThemingProvider.setDefaultTheme('dell-branding');
	}
}

export default DellTheme;
