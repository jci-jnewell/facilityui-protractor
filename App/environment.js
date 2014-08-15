 // Common configuration files with defaults plus overrides from environment vars
module.exports = {

  // The address of a running selenium server.
  seleniumAddress: 
    (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': process.env.TEST_BROWSER_NAME || 'chrome',
    'version': process.env.TEST_BROWSER_VERSION  || 'ANY',
    'chromeOptions': {
        args: ['--test-type']
    }
  },

  // A base URL for your application under test.
  baseUrl: 'http://' + (process.env.TEST_HTTP_HOST || 'localhost') + (process.env.TEST_HTTP_PORT ? ':' + process.env.TEST_HTTP_PORT : '') + '/' + (process.env.TEST_HTTP_ROOT || 'MetasysFacility.Application') + '#'
};