import { Given, Then, When } from "@cucumber/cucumber";
import Result from "../../pages/web/result.page";
import Contact from "../../pages/web/contact.page";
import Main from "../../pages/web/main.page";

Given(/^ingreso a pagina principal$/, async () => {
  await Result.openPage('http://automationpractice.com/index.php');
  });

When(/^busqueda con campo search vacio$/, async () => {
    await Main.searchBtn.click();
  });

Then(/^se alerta que no hay valor ingresado$/, async () => {
    const alertWarning = await Result.alertWarning;
    expect(alertWarning.getText()).toHaveTextContaining('Please enter a search keyword');
  });

When(/^busqueda de producto (.+)$/, async (producto: string) => {
    Main.searchProductName(producto);
  });

Then(/^tengo resultados para el producto (.+)$/, async (producto: string) => {
    const headerResult = await Result.headerResult;
    expect(headerResult.getText()).toHaveTextContaining(producto);
  });

Given(/^acceso a pagina de datos de contacto$/, async () => {
    await Main.contactUsBtn.click();
  });

When(/^envio de mensaje sin completar datos$/, async () => {
    await Contact.sendMail();
  });

When(/^envio de mensaje con datos$/, async (dataTable: any) => {
    const datos: any = dataTable.hashes()[0];
    await Contact.completeForm(datos);
    await Contact.sendMail();

  });

Then(/^se alerta que la operacion es invalida$/, async () => {
    const alertWarning = await Contact.warningAlert;
    expect(alertWarning.getText()).toHaveTextContaining('There is 1 error');
  });

Then(/^el envio de mensaje fue exitoso$/, async () => {
    const successfulAlert = await Contact.succesfulAlert;
    expect(successfulAlert.getText()).toHaveTextContaining('Your message has been successfully sent to our team.');
  });