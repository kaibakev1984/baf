import Page from './page';

class SignUp extends Page {
    public get emailAddressInput() {
        return $('#email_create');
    }

    public get createAnAccountBtn() {
        return $("//span[normalize-space()='Create an account']");
    }

    public get emailInput() {
        return $('#email');
    }

    public get passwordInput() {
        return $('#passwd');
    }

    public get submitLoginBtn(){
        return $("button[id='SubmitLogin'] span");
    }

    public get forgotYourPasswordBtn() {
        return $("#a[title='Recover your forgotten password']");
    }

    public get retrievePasswordBtn() {
        return $("//span[normalize-space()='Retrieve Password']");
    }

    public get warningAlert(){
        return $("#div[id='create_account_error'] ol li");
    }

    public get authenticationWarningAlert() {
        return $("#div[class='alert alert-danger'] ol li");
    }

    public get headerForm() {
        return $(".page-subheading");
    }

    public get confirmationAlert() {
        return $('.alert.alert-success');
    }

    public get invalidEmailAlert() {
        return $("#div[class='alert alert-danger'] ol li");
    }

    public async createAccount(email: string) {
        await this.emailAddressInput.setValue(email);
        await this.createAnAccountBtn.click();
    }

    public async submitLogin(data: any) {
        await this.emailInput.setValue(data['email']);
        await this.passwordInput.setValue(data['password']);
        await this.submitLoginBtn.click();
    }
}

export default new SignUp();