const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const EditProfil = require('../pageobjects/edit.profil')

describe('Feature Edit Profil', () => {
    beforeEach(async () => {
        await browser.maximizeWindow()
        await LoginPage.open()
        await LoginPage.login('wahyunusantaraazis', 'Admin123!')
        await EditProfil.btnEditProfil.click()
    })

    afterEach(async () => {
        await browser.reloadSession()
    })

    it('Periksa field username', async () => {
        await expect(EditProfil.username).toHaveText(
            expect.stringContaining('Username'))
        await expect(EditProfil.fieldUsername).toBeExisting()
    })

    it('Periksa field email', async () => {
        await expect(EditProfil.email).toHaveText(
            expect.stringContaining('Email'))
        await expect(EditProfil.fieldEmail).toBeExisting()
        await expect(EditProfil.fieldEmail).toBeEnabled()
    })

    it('Periksa field nama depan', async () => {
        await expect(EditProfil.firstname).toHaveText(
            expect.stringContaining('Nama Depan'))
        await expect(EditProfil.fieldFirstName).toBeExisting()
        await expect(EditProfil.fieldFirstName).toBeEnabled()
    })

    it('Periksa field nama belakang', async () => {
        await expect(EditProfil.lastname).toHaveText(
            expect.stringContaining('Nama Belakang'))
        await expect(EditProfil.fieldLastName).toBeExisting()
        await expect(EditProfil.fieldLastName).toBeEnabled()
    })

    it('Periksa button simpan', async () => {
        await expect(EditProfil.btnSimpan).toBeExisting()
        await expect(EditProfil.btnSimpan).toBeEnabled()
    })

    it('User email, nama depan, nama belakang di menu edit profil', async () => {
        const generateRandomName = () => {
            const length = Math.floor(Math.random() * 5) + 5;
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let randomName = '';
    
            for (let i = 0; i < length; i++) {
                randomName += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return randomName;
        };
    
        const generateRandomEmail = () => {
            const randomString = Math.random().toString(36).substring(2, 10);
            const email = `${randomString}@example.com`;
            return email;
        };
    
        const randomName = generateRandomName();
        const randomEmail = generateRandomEmail();
    
        await EditProfil.fieldEmail.setValue(randomEmail);
        await EditProfil.fieldFirstName.setValue(randomName);
        await EditProfil.fieldLastName.setValue(randomName);
    
        await EditProfil.btnSimpan.click();
        await browser.maximizeWindow();
    
        await LoginPage.open();
        await LoginPage.login('wahyunusantaraazis', 'Admin123!');
        await EditProfil.btnEditProfil.click();
    
        const fieldValueFirstName = await EditProfil.fieldFirstName.getValue();
        expect(fieldValueFirstName).toBe(randomName);
    
        const fieldValueEmail = await EditProfil.fieldEmail.getValue();
        expect(fieldValueEmail).toBe(randomEmail);
    });


})