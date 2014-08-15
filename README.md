# FacilityUI testing using protactor

## Setup Steps

1. Install node.js
   
   The most current version of node should be installed using the installer provided at http://nodejs.org/. If already installed, a minimum version of v0.10.29 is suggested. 

2. Run setup.bat to install protractor and webdriver-manager
   
   The batch file assists in installing protractor globally and updating the webdriver-manager that is created with the protractor installation. These steps can be run manually using:
   ```
   > npm install -g protractor
   > webdriver-manager update --proxy http://10.10.5.18
   ```

   > Note that the proxy being used is specific to an internal network environment.
   
3. To start an instance of selenium server, open a new cmd shell and run: 
   ```
   > webdriver-manager update
   ```

4. Run run.bat to execute all tests for Login or App. To run tests against either individually use:
   ```
   > protractor Login/configuration.js
   > protractor App/configuration.js
   ```
   
## Test Suite: Login
The Login test suite demonstrates a set of tests that use the raw selenium webdriver api. This is used because protractor is specifically tailored to Angular development and requires angular to be defined on the page. Since the Login page does not include any angular apps, the raw selenium spi must be used to test it.

## Test Suite: App
The login test suite demonstrates a set of tests that validate overall application functionality. The configuration for the suite includes an `onPrepare` function to manage user login as part of the test session. By default, all tests will login and navigate to #/ on the application.

## Environment Configuration
By default, the tests will be run against http://localhost/MetasysFacility.Application. You can optionally set the environment variables __TEST_HTTP_HOST__ and __TEST_HTTP_ROOT__ to modify the base URL for the test. These are used in the format `http://{TEST_HTTP_HOST}/{TEST_HTTP_ROOT}`.

To hit a different server with a production installation at http://10.x.x.x/ui you could use:
   ```
   > set TEST_HTTP_HOST=10.x.x.x
   > set TEST_HTTP_ROOT=ui
   ```
