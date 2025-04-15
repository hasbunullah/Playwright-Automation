const { expect, test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');


  test('Verify the search functionality is working', async ({ page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await page.waitForTimeout(8000);
    await homePage.searchItem('apoquel');
    await expect(page.getByRole('link', { name: 'Apoquel Tablet Rx' })).toBeVisible();
  });
