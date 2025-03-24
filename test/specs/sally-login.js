const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const testCases = require('../testdata/login.json')

describe('Login Website Sally', () => {
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

            if (testCase.username && testCase.password) {
                await LoginPage.login(testCase.username, testCase.password)

                if (testCase.check) {
                    await LoginPage[testCase.check]()
                }

                if (testCase.alert) {
                    await expect(LoginPage[testCase.alert]).toBeExisting()
                    await expect(LoginPage[testCase.alert]).toHaveText(
                        expect.stringContaining(testCase.alertText)
                    )
                }
            }
        })
    }
});