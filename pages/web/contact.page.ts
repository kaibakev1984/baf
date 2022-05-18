import Page from './page';

class Contact extends Page {
    public get subjectHeading() {
        return $('#id_contact');
    }

    public get emailInput() {
        return $('#email');
    }

    public get orderReferenceInput() {
        return $('#id_order');
    }

    public get messageInput() {
        return $('#message');
    }

    public get sendBtn() {
        return $("//span[normalize-space()='Send']");
    }


    public get warningAlert() {
        return $("//p[normalize-space()='There is 1 error']");
    }

    public get succesfulAlert() {
        return $('.alert.alert-success');
    }

    public async completeForm(data: any) {
        await this.emailInput.setValue(data['email']);
        await this.orderReferenceInput.setValue(data['pedidoReferencia']);
        await this.messageInput.setValue(data['mensaje']);
        await this.subjectHeading.selectByAttribute("value", "1");
    }

    public async sendMail() {
        await this.sendBtn.click();
    }
}

export default new Contact();