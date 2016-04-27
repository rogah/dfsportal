'use strict';

class DellTheme {

	static apply($mdThemingProvider) {

		$mdThemingProvider.definePalette('dell-blue', {
			'50': '#ffffff',
			'100': '#81d7ff',
			'200': '#49c5ff',
			'300': '#00a8f6',
			'400': '#0096dd',
			'500': '#0085c3',
			'600': '#0070a4',
			'700': '#005b86',
			'800': '#004667',
			'900': '#003149',
			'A100': '#81d7ff',
			'A200': '#009ae2',
			'A400': '#0085c3',
			'A700': '#005b86',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 A100'
		});

		$mdThemingProvider.definePalette('dell-green', {
			'50': '#ffffff',
			'100': '#d1ff76',
			'200': '#abff05',
			'300': '#9ceb00',
			'400': '#8bd200',
			'500': '#7ab800',
			'600': '#669900',
			'700': '#517b00',
			'800': '#3d5c00',
			'900': '#293e00',
			'A100': '#d1ff76',
			'A200': '#8bd200',
			'A400': '#7ab800',
			'A700': '#517b00',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 A100'
		});

		$mdThemingProvider.definePalette('dell-red', {
			'50': '#ffffff',
			'100': '#f8dbd5',
			'200': '#e78875',
			'300': '#e4765f',
			'400': '#e0634a',
			'500': '#dc5034',
			'600': '#ce4024',
			'700': '#b4381f',
			'800': '#9a301b',
			'900': '#802816',
			'A100': '#f8dbd5',
			'A200': '#e0664e',
			'A400': '#dc5034',
			'A700': '#b4381f',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 A100'
		});

		$mdThemingProvider.definePalette('dell-yellow', {
			'50': '#ffffff',
			'100': '#ffe9b0',
			'200': '#ffda78',
			'300': '#ffc630',
			'400': '#ffbd12',
			'500': '#f2af00',
			'600': '#d39900',
			'700': '#b58300',
			'800': '#966d00',
			'900': '#785600',
			'A100': '#ffe9b0',
			'A200': '#ffbd12',
			'A400': '#f2af00',
			'A700': '#b58300',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 A100'
		});

		$mdThemingProvider.definePalette('dell-purple', {
			'50': '#ffffff',
			'100': '#ca89de',
			'200': '#b65dd2',
			'300': '#9632b5',
			'400': '#822c9d',
			'500': '#6e2585',
			'600': '#5a1e6d',
			'700': '#461855',
			'800': '#33113d',
			'900': '#1f0a25',
			'A100': '#ca89de',
			'A200': '#822c9d',
			'A400': '#6e2585',
			'A700': '#461855',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50'
		});

		$mdThemingProvider.definePalette('dell-gray', {
			'50': '#ffffff',
			'100': '#f9f9f9',
			'200': '#ececec',
			'300': '#c9c9c9',
			'400': '#b9b9b9',
			'500': '#aaaaaa',
			'600': '#9b9b9b',
			'700': '#8b8b8b',
			'800': '#7c7c7c',
			'900': '#6d6d6d',
			'A100': '#f9f9f9',
			'A200': '#b9b9b9',
			'A400': '#aaaaaa',
			'A700': '#8b8b8b',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 A100 A200'
		});

		$mdThemingProvider.definePalette('dell-dark-gray', {
			'50': '#ffffff',
			'100': '#a2a2a2',
			'200': '#868686',
			'300': '#636363',
			'400': '#535353',
			'500': '#444444',
			'600': '#353535',
			'700': '#252525',
			'800': '#161616',
			'900': '#070707',
			'A100': '#f9f9f9',
			'A200': '#a2a2a2',
			'A400': '#444444',
			'A700': '#252525',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 A100'
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
			'A100': '#ffdcbd',
			'A200': '#ff871f',
			'A400': '#ff7700',
			'A700': '#c25a00',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 A100'
		});

		$mdThemingProvider.definePalette('dell-berry', {
			'50': '#ffffff',
			'100': '#edb0c5',
			'200': '#e382a3',
			'300': '#d64779',
			'400': '#d02f66',
			'500': '#b7295a',
			'600': '#9e234e',
			'700': '#851e41',
			'800': '#6c1835',
			'900': '#531329',
			'A100': '#edb0c5',
			'A200': '#d02f66',
			'A400': '#b7295a',
			'A700': '#851e41',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 A100'
		});

		$mdThemingProvider.definePalette('dell-dark-red', {
			'50': '#ffffff',
			'100': '#f8a4ad',
			'200': '#f3707f',
			'300': '#ee2e44',
			'400': '#ea132b',
			'500': '#ce1126',
			'600': '#b20f21',
			'700': '#950c1c',
			'800': '#790a16',
			'900': '#5d0811',
			'A100': '#f8a4ad',
			'A200': '#ea132b',
			'A400': '#ce1126',
			'A700': '#950c1c',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 A100'
		});

		$mdThemingProvider.definePalette('dell-background', {
			'50': '#ffffff',
			'100': '#f9f9f9',
			'200': '#aaaaaa',
			'300': '#8b8b8b',
			'400': '#535353',
			'500': '#444444',
			'600': '#353535',
			'700': '#252525',
			'800': '#161616',
			'900': '#070707',
			'A100': '#0085c3',
			'A200': '#7ab800',
			'A400': '#dc5034',
			'A700': '#f2af00',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100'
		});

		$mdThemingProvider.theme('dell-branding')
			.primaryPalette('dell-blue', {
				'default': '500',
				'hue-1': '50',
				'hue-2': '400',
				'hue-3': '700'
			})
			.accentPalette('dell-green', {
				'default': 'A400',
				'hue-1': 'A100',
				'hue-2': 'A200',
				'hue-3': 'A700'
			})
			.warnPalette('dell-red', {
				'default': '500',
				'hue-1': '100',
				'hue-2': '400',
				'hue-3': '700'
			})
			.backgroundPalette('dell-background', {
				'default': '50',
				'hue-1': '100',
				'hue-2': 'A100',
				'hue-3': 'A400'
			});

		$mdThemingProvider.setDefaultTheme('dell-branding');
	}
}

module.exports = DellTheme;
