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

Given(/^acceso a autenticacion$/, async () => {
    const signInBtn = await $("//a[normalize-space()='Sign in']");

    signInBtn.click();
  });

When(/^creacion de cuenta con email (.+)$/, async (email: string)  => {
    const emailAddressInput = await $('#email_create');
    const createAnAccountBtn = await $("//span[normalize-space()='Create an account']");

    emailAddressInput.setValue(email);
    createAnAccountBtn.click();
  });

When(/^se ingresa con datos$/, async (table: any) => {
    let datos: any = table.hashes()[0];
    const emailInput = await $('#email');
    const passwordInput = await $('#passwd');
    const loginBtn = await $("button[id='SubmitLogin'] span");

    emailInput.setValue(datos['email']);
    passwordInput.setValue(datos['password']);
    loginBtn.click();
  });

When(/^se intenta recuperar contrasenia$/, async () => {
    const forgotYourPasswordBtn = await $("#a[title='Recover your forgotten password']");
    forgotYourPasswordBtn.click();
  });

When(/^se intenta recuperar contrasenia de cuenta (.+)$/, async (email: string) => {
    const forgotYourPasswordBtn = await $("#a[title='Recover your forgotten password']");
    forgotYourPasswordBtn.click();

    const emailInput = await $('#email');
    const retrievePasswordBtn = await $("//span[normalize-space()='Retrieve Password']");
    emailInput.setValue(email);
    retrievePasswordBtn.click();
  });

Then(/^se alerta que el email ya esta registrado$/, async () => {
    const warningAlert = await $("#div[id='create_account_error'] ol li");
    expect(warningAlert.getText()).toHaveTextContaining('An account using this email address has already been registered. Please enter a valid password or request a new one.');
  });

Then(/^se alerta que la autenticacion fue fallida$/, async () => {
    const alertWarning = await $("#div[class='alert alert-danger'] ol li");
    expect(alertWarning.getText()).toHaveTextContaining('Authentication failed.');
  });

Then(/^se puede recuperar contrasenia$/, async () => {
    const headerForm = await $(".page-subheading");
    expect(headerForm.getText()).toHaveTextContaining('Forgot your password?');
  });

Then(/^se envio confirmacion de contrasenia a mail (.+)$/, async (email: string) => {
    const confirmationAlert = await $('.alert.alert-success');
    let expectedText: string = 'A confirmation email has been sent to your address: ' + email;
    expect(confirmationAlert.getText()).toHaveTextContaining(expectedText);
  });

When(/^se intenta recuperar contrasenia de cuenta vacia$/, async () => {
    const forgotYourPasswordBtn = await $("//a[normalize-space()='Forgot your password?']");
    forgotYourPasswordBtn.click();

    const retrievePasswordBtn = await $("//span[normalize-space()='Retrieve Password']");
    retrievePasswordBtn.click();
  });

Then(/^se alerta de que el mail es invalido$/, async () => {
    const invalidEmailWarning = await $("#div[class='alert alert-danger'] ol li");
    expect(invalidEmailWarning.getText()).toHaveTextContaining('Invalid email address.');
  });