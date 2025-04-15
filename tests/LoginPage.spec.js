require('dotenv').config();
const { expect, test } = require("@playwright/test");
const { faker } = require('@faker-js/faker');
const { LoginPage } = require('../pages/LoginPage');

test('Verify that user can create an account', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    const randomEmail = faker.internet.email();
    await loginPage.goto();
    await loginPage.createAccount('hamid', 'Hussain', randomEmail);
    await expect(page).toHaveURL('https://sfcc.petfoodking.com/account?registration=submitted');
    console.log('The email is: ', randomEmail);

});

test('Verify that the user can login with valid credentials', async ({page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await page.waitForTimeout(8000);
    await expect(page).toHaveURL('/account?registration=false');
});
