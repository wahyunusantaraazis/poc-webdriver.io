const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $("//button[normalize-space()='LOGIN']");
    }

    get welcomeMessage() {
        return $('//h3[normalize-space()="Hi, Wahyu"]');
    }

    get popAlertInvalidPass(){
        return $("//div[@class='alert-text']");
    }

    get lupaPassword(){
        return $("//a[normalize-space()='Lupa Password ?']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async checkWelcomeMessage() {
        await expect(this.welcomeMessage).toHaveText('Hi, Wahyu')
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();