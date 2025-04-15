require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { MyPetsPage } = require('../pages/MyPetsPage');


test('Verify that the user can add a pet', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const petsPage = new MyPetsPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await expect(page).toHaveURL('/account?registration=false');
    await homePage.myAccountMenu();
    await petsPage.addPet();
    const pageText = await page.innerText('body');
    expect(pageText).toContain('Somii');
    
});

test('Verify that the user can Remove a pet', async ({ page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const petsPage = new MyPetsPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await expect(page).toHaveURL('/account?registration=false');
    await homePage.myAccountMenu();
    await petsPage.removePet();
    await page.waitForTimeout(3000); // Wait for 3 seconds
    const pageText = await page.innerText('body');
    expect(pageText).not.toContain('Somii');
});