// Karma configuration
// Generated on Mon Mar 07 2016 15:26:28 GMT-0300 (CLT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins : [
        'karma-jasmine',
        'karma-phantomjs-launcher',
        'karma-spec-reporter',
        'karma-coverage',
        'karma-sinon'
    ],

    frameworks: ['jasmine', 'sinon'],
    // list of files / patterns to load in the browser
    files: [
        
        // bower:js
                'bower_components/jquery/dist/jquery.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-mocks/angular-mocks.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/angular-animate/angular-animate.js',
                'bower_components/lodash/lodash.js',
                'bower_components/bootstrap/dist/js/bootstrap.js',
                'bower_components/spin.js/spin.js',
                'bower_components/angular-spinner/angular-spinner.js',
                'bower_components/angular-messages/angular-messages.js',
                'bower_components/angular-breadcrumb/release/angular-breadcrumb.js',
                'bower_components/angular-cookies/angular-cookies.js',
                'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                'bower_components/restangular/dist/restangular.js',
                'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
                // endbower
    
        'src/**/*.js',
        'test/unit/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/**/*.js'  : ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec','coverage'],
    //reporters: ['spec'],

    coverageReporter: {
      
      dir : 'test/coverage/',
      subdir: function(browser) {
        // normalization process to keep a consistent browser name across different OS
        return browser.toLowerCase().split(/[ /-]/)[0];
      },
      reporters: [
        { type : 'html', subdir: 'report-html'},
        { type : 'lcov', subdir: 'report-lcov' },
        { type : 'text-summary'}
      ]

    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
