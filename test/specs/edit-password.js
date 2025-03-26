const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const EditPassword = require('../pageobjects/edit.password')

describe('Fitur Edit Profil', () => {
    const usernameValid = 'wahyunusantaraazis'
    const passwordValid = 'Admin123!'
    const usernameInvalid = 'dummywahyu'
    const passwordInvalid = 'Meimei123!'
    const passwordBaru = 'Wahyu123!'
    const passwordKonfirmasi = 'Testing123!'
    const passwordBaruInvalid = 'wahyuaja'

    beforeEach(async () => {
        await browser.maximizeWindow()
        await LoginPage.open()
    })

    afterEach(async () => {
        await browser.reloadSession()
    })

    // Fungsi bantu untuk login
    const login = async (username, password) => {
        await LoginPage.login(username, password)
        await EditPassword.btnEditPassword.click()
    }

    it('Periksa field password', async () => {
        await login(usernameValid, passwordValid)
        await expect(EditPassword.txtPassword).toHaveText(expect.stringContaining('Password'))
        await expect(EditPassword.fieldPassword).toBeExisting()
        await expect(EditPassword.fieldPassword).toBeEnabled()
    })

    it('Periksa field email', async () => {
        await login(usernameValid, passwordValid)
        await expect(EditPassword.txtNewPassword).toHaveText(expect.stringContaining('Password Baru'))
        await expect(EditPassword.fieldNewPassword).toBeExisting()
        await expect(EditPassword.fieldNewPassword).toBeEnabled()
    })

    it('Periksa field nama depan', async () => {
        await login(usernameValid, passwordValid)
        await expect(EditPassword.txtConfirmPassword).toHaveText(expect.stringContaining('Konfirmasi Password'))
        await expect(EditPassword.fieldConfirmPassword).toBeExisting()
        await expect(EditPassword.fieldConfirmPassword).toBeEnabled()
    })

    it('Pengguna menginput password baru berbeda dengan konfirmasi password', async () => {
        await login(usernameInvalid, passwordValid)
        await EditPassword.updatepassword(passwordValid, passwordBaru, passwordKonfirmasi)
        await expect(EditPassword.alertConfirmPassword).toBeExisting()
        await expect(EditPassword.alertConfirmPassword).toHaveText(expect.stringContaining('Please enter the same value again.'))
    })

    it('Pengguna menginput password yang salah', async () => {
        await login(usernameInvalid, passwordValid)
        await EditPassword.updatepassword(passwordInvalid, passwordBaru, passwordBaru)
        await expect(EditPassword.alertPassword).toBeExisting()
        await expect(EditPassword.alertPassword).toHaveText(expect.stringContaining('Password yang Anda masukan salah'))
    })

    it('Pengguna kosongkan semua field', async () => {
        await login(usernameInvalid, passwordValid)
        await EditPassword.updatepassword('', '', '')
        await expect(EditPassword.alertCurrentPassword).toBeExisting()
        await expect(EditPassword.alertCurrentPassword).toHaveText(expect.stringContaining('This field is required.'))
        await expect(EditPassword.alertNewPassword).toBeExisting()
        await expect(EditPassword.alertNewPassword).toHaveText(expect.stringContaining('This field is required.'))
        await expect(EditPassword.alertConfirmPassword).toBeExisting()
        await expect(EditPassword.alertConfirmPassword).toHaveText(expect.stringContaining('This field is required.'))
    })

    it('Pengguna menginput password baru tidak sesuai format ketentuan', async () => {
        await login(usernameInvalid, passwordValid)
        await EditPassword.updatepassword(passwordValid, passwordBaruInvalid, passwordBaruInvalid)
        await expect(EditPassword.alertPassword).toBeExisting()
        await expect(EditPassword.alertPassword).toHaveText(expect.stringContaining('Kata Sandi harus mengandung setidaknya satu huruf besar, satu huruf kecil, satu digit angka, dan satu karakter spesial'))
    })
})
