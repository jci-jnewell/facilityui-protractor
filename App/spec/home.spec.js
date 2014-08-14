var env = require('../environment');

describe('Home page', function () {

    it('should have page title set to product name', function () {
        expect(browser.getTitle()).toBe('Metasys UI');
    });
});