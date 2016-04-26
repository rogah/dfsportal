const nconf = require('nconf');

nconf.argv().env().file({ file: './.env' });

exports.config = {

  baseUrl: nconf.get('sfdc:communityBaseUrl'),
  
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  
  framework: 'custom',
  
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  suites: {
    authentication: 'test/features/authentication/**/*.feature'
  },

  capabilities: {
    'browserName': 'chrome'
  },
  
  cucumberOpts: {
    require: [
      'test/features/support/env.js',
      'test/features/support/world.js',
      'test/features/support/hooks.js',
      'test/features/**/*.steps.js'
    ],
    format: 'pretty'
  }
};