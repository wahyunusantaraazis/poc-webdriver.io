const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LupaPassword extends Page {
    /**
     * define selectors using getter methods
     */
    get btnEditProfil () {
        return $("//a[normalize-space()='Edit Profile']");
    }

    get username () {
        return $("//label[normalize-space()='Username']");
    }

    get fieldUsername () {
        return $("//input[@id='username']");
    }

    get email () {
        return $("//label[normalize-space()='Email']");
    }

    get fieldEmail () {
        return $("//input[@id='email']");
    }

    get firstname () {
        return $("//label[normalize-space()='Nama Depan']");
    }

    get fieldFirstName () {
        return $("//input[@id='first_name']");
    }

    get lastname () {
        return $("//label[normalize-space()='Nama Belakang']");
    }

    get fieldLastName () {
        return $("//input[@id='last_name']");
    }

    get btnSimpan () {
        return $("//button[contains(@class,'btn btn-brand')]");
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async lupapassword (email) {
    //     await this.linkbuttonLupaPassword.click();
    //     await this.inputEmail.setValue(email);
    //     await this.btnKirim.click();
    // }
}

module.exports = new LupaPassword();