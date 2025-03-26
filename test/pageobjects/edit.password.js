const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EditPassword extends Page {
    /**
     * define selectors using getter methods
     */
    get btnEditPassword () {
        return $("//a[normalize-space()='Edit Password']");
    }

    get txtPassword () {
        return $("//label[normalize-space()='Password']");
    }
    get fieldPassword () {
        return $('#current-password');
    }
    get txtNewPassword () {
        return $("//div[contains(@class,'kt-section__content')]//label[contains(@class,'form-control-label')][normalize-space()='Password Baru']");
    }
    get fieldNewPassword () {
        return $("//input[@id='new-password']");
    }

    get txtConfirmPassword () {
        return $("//div[contains(@class,'kt-section__content')]//label[contains(@class,'form-control-label')][normalize-space()='Konfirmasi Password']");
    }

    get fieldConfirmPassword () {
        return $("//input[@id='confirm-new-password']");
    }

    get btnSimpan(){
        return $("//button[@class='btn btn-brand']");
    }

    get alertCurrentPassword(){
        return $("#current-password-error");
    }

    get alertNewPassword(){
        return $("#new-password-error");
    }

    get alertConfirmPassword(){
        return $("#confirm-new-password-error");
    }

    get alertPassword(){
        return $("//div[@role='alert']");
        //Password yang Anda masukan salah
        //Kata Sandi harus mengandung setidaknya satu huruf besar, satu huruf kecil, satu digit angka, dan satu karakter spesial
    }

    async updatepassword (password, newpassword, confirmpassword) {
        await this.fieldPassword.setValue(password);
        await this.fieldNewPassword.setValue(newpassword);
        await this.fieldConfirmPassword.setValue(confirmpassword);
        await this.btnSimpan.click();
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

module.exports = new EditPassword();