const { expect, test } = require("@playwright/test");
const { CheckoutPage } = require("../pages/CheckoutPage");
const { CartPage } = require("../pages/CartPage");
const { HomePage } = require("../pages/HomePage");
const { LoginPage } = require("../pages/LoginPage");
const data = require('../jsonData/data.json');

test("User is able to add an item to the cart and checkout", async ({
    page,
}) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkout= new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await page.waitForTimeout(8000);
    await homePage.searchItem(data.search.itemID);
    await homePage.selectItem();
    await cartPage.addItemToCart();
    await expect(page).toHaveTitle("Your shopping cart");
    await cartPage.proceedToCheckout();
    await checkout.completeCheckout();
    await expect(checkout.order).toHaveText("Thank you for your order!");
});
