import { Given, Then, When } from "@cucumber/cucumber";
import AutomationPractice from "../../pages/web/automation_practice.page";

Given(/^ingreso a pagina principal$/, async () => {
  await AutomationPractice.openPage('http://automationpractice.com/index.php');
  });

When(/^busqueda con campo search vacio$/, async () => {
    await AutomationPractice.searchEmpty();
  });

Then(/^se alerta que no hay valor ingresado$/, async () => {
    const alertWarning = await AutomationPractice.alertWarning;
    expect(alertWarning.getText()).toHaveTextContaining('Please enter a search keyword');
  });

When(/^busqueda de producto (.+)$/, async (producto: string) => {
    AutomationPractice.searchProductName(producto);
  });

Then(/^tengo resultados para el producto (.+)$/, async (producto: string) => {
    const headerResult = await AutomationPractice.headerResult;
    expect(headerResult.getText()).toHaveTextContaining(producto);
  });

Given(/^acceso a pagina de datos de contacto$/, async () => {
    const contactUsBtn = await $('#contact-link');

    contactUsBtn.click();
  });

When(/^envio de mensaje sin completar datos$/, async () => {
    const sendBtn = await $("//span[normalize-space()='Send']");
    sendBtn.click();
  });

When(/^envio de mensaje con datos$/, async (dataTable: any) => {
    const datos: any = dataTable.hashes()[0];

    const subjectHeading = await $('#id_contact');
    const emailInput = await $('#email');
    const orderReferenceInput = await $('#id_order');
    const messageInput = await $('#message');
    const sendBtn = await $("//span[normalize-space()='Send']");

    emailInput.setValue(datos['email']);
    orderReferenceInput.setValue(datos['pedidoReferencia']);
    messageInput.setValue(datos['mensaje']);

    await subjectHeading.selectByAttribute("value", "1");
    sendBtn.click();

  });

Then(/^se alerta que la operacion es invalida$/, async () => {
    const alertWarning = await $("//p[normalize-space()='There is 1 error']");
    expect(alertWarning.getText()).toHaveTextContaining('There is 1 error');
  });

Then(/^el envio de mensaje fue exitoso$/, async () => {
    const successfulAlert = await $('.alert.alert-success');
    expect(successfulAlert.getText()).toHaveTextContaining('Your message has been successfully sent to our team.');
  });