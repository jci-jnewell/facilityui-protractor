var env = require('../environment');

describe('Login', function () {
    var driver = browser.driver;
    
    beforeEach(function() {
        driver.get(env.baseUrl + 'Account/Login');
    });

    it('should disable login button until username and password are entered', function () {
        expect(driver.findElement(by.id('login_button')).isEnabled()).toBe(false);
        
        driver.findElement(by.id('username_inputClone0')).sendKeys('metasyssysagent');
        expect(driver.findElement(by.id('login_button')).isEnabled()).toBe(false);
        driver.findElement(by.id('username_inputClone0')).clear();
        
        driver.findElement(by.id('password_input')).sendKeys('12345678');
        expect(driver.findElement(by.id('login_button')).isEnabled()).toBe(false);
        driver.findElement(by.id('password_input')).clear();
        
        driver.findElement(by.id('username_inputClone0')).sendKeys('metasyssysagent');
        driver.findElement(by.id('password_input')).sendKeys('12345678');
        expect(driver.findElement(by.id('login_button')).isEnabled()).toBe(true);
    });
});