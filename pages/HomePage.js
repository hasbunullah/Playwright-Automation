const { expect } = require("allure-playwright");

class HomePage {
    constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#search-results');
    this.shopNowBtn = page.locator('a.btn-primary.shop-now-btn')
    this.productName= page.getByRole('link', { name: 'Apoquel Tablet Rx' });
    this.myAccountMenu = page.locator('#myaccount')
    
    }

    async searchItem(itemCode) {
    await this.searchInput.click();
    await this.searchInput.type(itemCode);
    await this.searchInput.press('Enter');
    }

    async selectItem() {
    await this.shopNowBtn.click();
    }

    async myAccount(){
    await this.myAccountMenu.click();
    }

}

module.exports = { HomePage };