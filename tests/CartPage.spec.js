const { expect, test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');



test('Verify the product is added to the cart', async ({ page}) => {
  const loginPage= new LoginPage(page);
  const homePage= new HomePage(page);
  const cartPage= new CartPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
  await page.waitForTimeout(8000);
  await homePage.searchItem('49755');
  await homePage.selectItem();
  await cartPage.addItemToCart();
  const getCartValue = await page.locator('.product-name').textContent();
  expect(getCartValue).toContain('Oratene Veterinarian Toothpaste Gel, 2.5 oz');

});

test.skip('Verify that the sum of the product price is correct', async ({ page }) => {
  const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
  
  await loginPage.goto();
  await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
  await page.waitForTimeout(8000);
  await homePage.searchItem('49755');
  await homePage.selectItem();
  await cartPage.addItemToCart();
  await page.waitForTimeout(3000);
  await cartPage.priceCheck();
  const { addedValue, priceFloat3 } = await cartPage.priceCheck();
  expect(addedValue).toBe(priceFloat3);
});