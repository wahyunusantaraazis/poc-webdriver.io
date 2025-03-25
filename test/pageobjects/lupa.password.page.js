const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LupaPassword extends Page {
    /**
     * define selectors using getter methods
     */
    get linkbuttonLupaPassword () {
        return $("//a[normalize-space()='Lupa Password ?']");
    }

    get inputEmail() {
        return $('#email');
    }

    get btnKirim(){
        return $("//button[normalize-space()='Kirim']");
    }

    get btnLogin(){
        return $("//a[normalize-space()='Login']");
    }

    get alertInvalidEmail(){
        return $("//label[@id='email-error']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async lupapassword (email) {
        await this.linkbuttonLupaPassword.click();
        await this.inputEmail.setValue(email);
        await this.btnKirim.click();
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

module.exports = new LupaPassword();