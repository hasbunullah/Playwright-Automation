class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.autoShipBtn = page.locator('.btn-continue-to-auto-ship')
        this.paymentBtn = page.locator('.btn-continue-to-payment')
        this.paymentMethod= page.locator('.btn-continue-to-rx-step')
        this.reviewOrderBtn = page.locator('.btn-continue-to-review-order')
        this.placeOrderBtn = page.locator('.js-place-order')
        this.order = page.locator('.order-thank-you-msg')
    }

    async completeCheckout() {
        await this.paymentBtn.click();
        // await this.autoShipBtn.click();
        // await this.paymentMethod.click();
        await this.reviewOrderBtn.click();
        await this.placeOrderBtn.click();
    }

    async verifyOrder() {
        await this.page.waitForSelector('.order-thank-you-msg');
        return await this.page.locator('.order-thank-you-msg').textContent();
    }
}

module.exports = { CheckoutPage };
