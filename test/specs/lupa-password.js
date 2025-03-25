const { expect } = require('@wdio/globals')
const LupaPassword = require('../pageobjects/lupa.password.page')

describe('Feature Lupa Password', () => {
    beforeEach(async () => {
        await browser.reloadSession()
    })

    it('Periksa field email', async () => {
        await LupaPassword.open()
        await LupaPassword.linkbuttonLupaPassword.click()
        await expect(LupaPassword.inputEmail).toBeExisting()
        await expect(LupaPassword.inputEmail).toBeEnabled()
        await expect(LupaPassword.inputEmail).toHaveAttr('placeholder', 'Email')
    })

    it('Periksa button kirim', async () => {
        await LupaPassword.open()
        await LupaPassword.linkbuttonLupaPassword.click()
        await expect(LupaPassword.btnKirim).toBeExisting()
        await expect(LupaPassword.btnKirim).toBeEnabled()
        await expect(LupaPassword.btnKirim).toHaveText(
            expect.stringContaining('Kirim'))
    })

    it('Periksa linkbutton login', async () => {
        await LupaPassword.open()
        await LupaPassword.linkbuttonLupaPassword.click()
        await expect(LupaPassword.btnLogin).toBeExisting()
        await expect(LupaPassword.btnLogin).toBeEnabled()
    })

    it('User request lupa password dengan masukan email tidak sesuai format', async () => {
        await LupaPassword.open()
        await LupaPassword.lupapassword('wahyunusantaragmail.com')
        await expect(LupaPassword.alertInvalidEmail).toBeExisting()
        await expect(LupaPassword.alertInvalidEmail).toHaveText(
            expect.stringContaining('Please enter a valid email address.'))
    })

    it('User request lupa password dengan masukan email < 6 karakter', async () => {
        await LupaPassword.open()
        await LupaPassword.lupapassword('wahyu')
        await expect(LupaPassword.alertInvalidEmail).toBeExisting()
        await expect(LupaPassword.alertInvalidEmail).toHaveText(
            expect.stringContaining('Please enter at least 6 characters.'))
    })

    it('Periksa field email hanya bisa menerima 50 karakter', async () => {
        await LupaPassword.open()
        await LupaPassword.linkbuttonLupaPassword.click()
        await LupaPassword.inputEmail.setValue('a'.repeat(51))
        const inputValue = await LupaPassword.inputEmail.getValue()
        expect(inputValue.length).toBeLessThanOrEqual(50)
    });
})