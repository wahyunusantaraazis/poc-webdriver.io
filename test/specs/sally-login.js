const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const testCases = require('../testdata/login.json')

describe('Fitur Login', () => {
    beforeEach(async () => {
        await browser.reloadSession()
    })

    for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i]

        it(testCase.description, async () => {
            await LoginPage.open()

            if (testCase.field) {
                await expect(LoginPage[testCase.field]).toBeExisting()
                await expect(LoginPage[testCase.field]).toBeEnabled()
            }

            if (testCase.username !== undefined && testCase.password !== undefined) {
                await LoginPage.login(testCase.username, testCase.password)

                if (testCase.check) {
                    await expect(LoginPage[testCase.check]).toBeExisting()
                }

                if (testCase.alert) {
                    await expect(LoginPage[testCase.alert]).toBeExisting()
                    await expect(LoginPage[testCase.alert]).toHaveText(
                        expect.stringContaining(testCase.alertText)
                    )
                }

                if (testCase.alertUsername && testCase.alertPass) {
                    await expect(LoginPage[testCase.alertUsername]).toBeExisting()
                    await expect(LoginPage[testCase.alertUsername]).toHaveText(
                        expect.stringContaining(testCase.alertTextUsername)
                    )
                    await expect(LoginPage[testCase.alertPass]).toBeExisting()
                    await expect(LoginPage[testCase.alertPass]).toHaveText(
                        expect.stringContaining(testCase.alertTextPass)
                    )
                }
            }
        })
    }
});
