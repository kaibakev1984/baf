import Page from "./page";

class Result extends Page {
    public get alertWarning() {
        return $('.alert.alert-warning');
    }

    public get listModeBtn() {
        return $('#list');
    }

    public get addToCartBtn() {
        return $("a[title='Add to cart'] span");
    }

    public get continueShoppingBtn() {
        return $("//span[@title='Continue shopping']//span[1]");
    }

    public get headerResult() {
        return $('.lighter');
    }

    public async addToCart() {
        await this.listModeBtn.click();
        await this.addToCartBtn.click();
    }

    public async continueToShopping() {
        await this.continueShoppingBtn.click();
    }
}

export default new Result();