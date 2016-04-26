module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['browserify', 'jasmine'],

    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-aria/angular-aria.min.js',
      'node_modules/angular-animate/angular-animate.min.js',
      'node_modules/angular-material/angular-material.min.js',
      'src/**/*.js',
      'test/specs/**/*.spec.js'
    ],

    exclude: [
        'test/features/**/*'
    ],

    preprocessors: {
        'src/**/*.js': ['browserify'],
        'test/specs/**/*.spec.js': ['browserify']
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome', 'PhantomJS'],

    singleRun: false,

    concurrency: Infinity,

    browserify: {
        debug: true,
        transform: [ 'babelify' ]
    }
  })
}
