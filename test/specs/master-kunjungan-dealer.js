const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const MasterKuler = require('../pageobjects/master.kunjungan.dealer')

describe('Fitur Master Kunjungan Dealer', () => {
    beforeEach(async () => {
        await browser.maximizeWindow()
        await LoginPage.open()
    })

    afterEach(async () => {
        await browser.reloadSession()
    })

    it('Periksa data master kunjungan dealer role BM dan MO', async () => {
        await LoginPage.login('wahyunusantaraazis', 'Admin123!')
        await MasterKuler.btnKuler.click()
        await MasterKuler.btnMasterKuler.click()
        await expect (MasterKuler.dataBM).toBeExisting()
        await expect (MasterKuler.dataMO).toBeExisting()
    })

    it('User kembali saat simpan edit data master kunjungan dealer role MO', async () => {
        await LoginPage.login('wahyunusantaraazis', 'Admin123!')
        await MasterKuler.btnKuler.click()
        await MasterKuler.btnMasterKuler.click()
        await MasterKuler.btnEditMO.click()
        await MasterKuler.inputpenalti('23','15','10')
        await MasterKuler.inputAllBranchMO.setValue("56")
        await MasterKuler.btnSimpan.click()
        await MasterKuler.btnKonfirmasiKembali.click
        await expect(MasterKuler.titleMOEdit).toBeExisting()
    })

    it('User edit data master kunjungan dealer role MO kemudian kembali', async () => {
        await LoginPage.login('wahyunusantaraazis', 'Admin123!')
        await MasterKuler.btnKuler.click()
        await MasterKuler.btnMasterKuler.click()
        await MasterKuler.btnEditMO.click()
        await MasterKuler.inputpenalti('23','15','10')
        await MasterKuler.inputAllBranchMO.setValue("56")
        await MasterKuler.btnKembali.click()
        await MasterKuler.btnKonfirmasiKembali.click()
        await expect (MasterKuler.titleMasterKuler).toBeExisting()
        await expect (MasterKuler.titleMasterKuler).toHaveText(expect.stringContaining('Master Kunjungan Dealer'))
    })

    it('User batal kembali saat konfirmasi kembali edit data master kunjugan dealer role MO', async () => {
        await LoginPage.login('wahyunusantaraazis', 'Admin123!')
        await MasterKuler.btnKuler.click()
        await MasterKuler.btnMasterKuler.click()
        await MasterKuler.btnEditMO.click()
        await MasterKuler.inputpenalti('23', '15', '10')
        await MasterKuler.inputAllBranchMO.setValue("56")
        await MasterKuler.btnKembali.click()
        await MasterKuler.btnKonfirmasiBatal.click()
        await expect(MasterKuler.titleMOEdit).toBeExisting()
    })

    it('User edit data master kunjungan dealer role MO', async () => {
        await LoginPage.login('wahyunusantaraazis', 'Admin123!')
        await MasterKuler.btnKuler.click()
        await MasterKuler.btnMasterKuler.click()
        await MasterKuler.btnEditMO.click()
        await MasterKuler.inputpenalti('23', '15', '10')
        await MasterKuler.inputAllBranchMO.setValue("56")
        await MasterKuler.btnSimpan.click()
        await MasterKuler.btnKonfirmasiSimpan.click()
        await expect (MasterKuler.SimpanBerhasil).toBeExisting()
        await MasterKuler.btnMengerti.click()
        await expect (MasterKuler.titleMasterKuler).toBeExisting()
        await expect (MasterKuler.titleMasterKuler).toHaveText(expect.stringContaining('Master Kunjungan Dealer'))
    })
})
