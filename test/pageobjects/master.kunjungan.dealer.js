const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MasterKuler extends Page {
    /**
     * define selectors using getter methods
     */
    get btnKuler () {
        return $("//span[normalize-space()='Kunjungan Dealer']");
    }

    get btnMasterKuler (){
        return $("//span[normalize-space()='Master Kunjungan Dealer']");
    }

    get fieldFilterData () {
        return $("#dt-search-0");
    }

    get titleMasterKuler(){
        return $("//h3[@class='kt-subheader__title']")
    }

    get btnDetailMO () {
        return $("//a[contains(@href,'master-kunjungan-dealer/MO/detail')]");
    }

    get btnDetailBM () {
        return $("//a[contains(@href,'master-kunjungan-dealer/BM/detail')]");
    }

    get btnEditMO () {
        return $("//a[contains(@href,'master-kunjungan-dealer/MO/form')]//i[contains(@class,'icon fa fa-edit text-white')]");
    }

    get inputPenalti1MO (){
        return $("//input[@id='input-1']")
    }

    get inputPenalti2MO (){
        return $("//input[@id='input-2']")
    }

    get inputPenalti3MO (){
        return $("//input[@id='input-3']")
    }

    get chcAllCabangMO (){
        return $("//label[@class='custom-control-label']")
    }

    get inputAllBranchMO(){
        return $("//input[@id='input-allBranch']")
    }

    get btnSimpan(){
        return $("//button[@id='btn-simpan']")
    }

    get btnKembali(){
        return $("//a[@id='btn-back']")
    }

    get btnKonfirmasiSimpan(){
        return $("//button[@type='button'][normalize-space()='Simpan']")
    }
    
    get btnKonfirmasiKembali(){
        return $("//button[normalize-space()='Kembali']")
    }

    get btnKonfirmasiBatal(){
        return $("//button[normalize-space()='Batal']")
    }

    get SimpanBerhasil(){
        return $("//h2[@id='swal2-title']")
    }

    get btnMengerti(){
        return $("//button[normalize-space()='Mengerti']")
    }
    
    get titleMODetail () {
        return $("//a[contains(@href,'master-kunjungan-dealer/BM/detail')]");
    }
    get titleMOEdit () {
        return $("//h3[normalize-space()='MO']");
    }

    get dataMO () {
        return $("//td[normalize-space()='MO']")
    }

    get dataBM(){
        return $("//td[normalize-space()='BM']")
    }

    async inputpenalti (input1, input2, input3) {
        await this.inputPenalti1MO.setValue(input1);
        await this.inputPenalti2MO.setValue(input2);
        await this.inputPenalti3MO.setValue(input3);
    }
}

module.exports = new MasterKuler();