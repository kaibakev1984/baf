import Page from "./page";

class Main extends Page {
    public get contactUsBtn() {
        return $('#contact-link');
    }

    public get searchBtn() {
        return $("button[name='submit_search']");
    }

    public get searchInput() {
        return $('#search_query_top');
    }

    public async searchProductName(product: string) {
        await this.searchInput.setValue(product);
        await this.searchBtn.click();
    }

}

export default new Main();