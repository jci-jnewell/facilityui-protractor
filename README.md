1) Install node.js: http://nodejs.org/
2) Run setup.bat to install protractor
3) To start an instance of selenium server, open a new cmd shell and run: 

	> webdriver-manager update

4) Run run.bat to execute all tests for Login or App. To run tests against either individually use:

	> protractor Login/configuration.js
	> protractor App/configuration.js