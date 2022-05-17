import Page from "./page";

class AutomationPractice extends Page {
    public get searchBtn() {
        return $("button[name='submit_search']");
    }

    public get searchInput() {
        return $('#search_query_top');
    }

    public get alertWarning() {
        return $('.alert.alert-warning');
    }

    public get listModeBtn() {
        return $('#list');
    }

    public get addToCartBtn() {
        console.log('=============================> add to cart btn');
        return $("a[title='Add to cart'] span");
    }

    public get continueShoppingBtn() {
        console.log('=============================> continue shopping btn');
        return $("//span[@title='Continue shopping']//span[1]");
    }

    public get headerResult() {
        return $('.lighter');
    }

    public async searchEmpty() {
        await this.searchBtn.click();
    }

    public async searchProductName(product: string) {
        await this.searchInput.setValue(product);
        await this.searchBtn.click();
    }

    public async addToCart() {
        await this.listModeBtn.click();
        await this.addToCartBtn.click();
    }

    public async continueToShopping() {
        await this.continueShoppingBtn.click();
    }

}

export default new AutomationPractice();