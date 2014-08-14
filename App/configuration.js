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
        browser.driver.get(env.baseUrl + 'Account/Login');

        browser.driver.findElement(by.id('username_inputClone0')).sendKeys('metasyssysagent');
        browser.driver.findElement(by.id('password_input')).sendKeys('B5F4soft');
        browser.driver.findElement(by.id('login_button')).click();

        // Login takes some time, so wait until it's done.
        // For the test app's login, we know it's done when it redirects to
        // index.html.
        browser.driver.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
                return /\#\/$/.test(url);
            });
        });
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