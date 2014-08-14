var env = require('./environment.js');

exports.config = {

    seleniumAddress: env.seleniumAddress,
    
    specs: [
      'spec/*.spec.js'
    ],

    capabilities: env.capabilities,

    // -----------------------------------------------------------------
    // Application configuration.
    // -----------------------------------------------------------------

    baseUrl: env.baseUrl,
    allScriptsTimeout: 11000,

    // -----------------------------------------------------------------
    // Runtime configuration.
    // -----------------------------------------------------------------

    onPrepare: function () {
        // TODO: Disable ng-animate
    },

    jasmineNodeOpts: {
        onComplete: function() {
            // Called just before the driver completes
        },
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    }
};