const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    let testRan = 0;
    beforeEach(function () {
        testRan++;
        console.log("Initialising... Test " + testRan);
    });
    
    it('labels for username and password are included', async () => {
        await LoginPage.open();

        await expect(LoginPage.labelUsername).toBeExisting();
        await expect(LoginPage.labelUsername).toHaveTextContaining(
            'Username');
        await expect(LoginPage.labelPassword).toBeExisting();
        await expect(LoginPage.labelPassword).toHaveTextContaining(
            'Password');   
    })

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    })

    it("shouldn't login leaving username empty", async () => {
        await LoginPage.open();

        await LoginPage.login('', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!');
    })

    it("shouldn't login leaving password empty", async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', '');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your password is invalid!');
    })

    it("shouldn't login with invalid credentials", async () => {
        await LoginPage.open();

        await LoginPage.login('Bruce', 'fioro2023');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!');
    })
})


