import { Given, Then, When } from "@cucumber/cucumber";
import Result from "../../pages/web/result.page";
import Contact from "../../pages/web/contact.page";
import Main from "../../pages/web/main.page";
import SignUp from "../../pages/web/sign_up.page";

Given(/^ingreso a pagina principal$/, async () => {
  await Result.openPage("http://automationpractice.com/index.php");
});

When(/^busqueda con campo search vacio$/, async () => {
  await Main.searchBtn.click();
});

Then(/^se alerta que no hay valor ingresado$/, async () => {
  const alertWarning = await Result.alertWarning;
  expect(alertWarning.getText()).toHaveTextContaining(
    "Please enter a search keyword"
  );
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
  expect(alertWarning.getText()).toHaveTextContaining("There is 1 error");
});

Then(/^el envio de mensaje fue exitoso$/, async () => {
  const successfulAlert = await Contact.succesfulAlert;
  expect(successfulAlert.getText()).toHaveTextContaining(
    "Your message has been successfully sent to our team."
  );
});

Given(/^acceso a autenticacion$/, async () => {
  const signInBtn = await Main.signInBtn;
  signInBtn.click();
});

When(/^creacion de cuenta con email (.+)$/, async (email: string) => {
  await SignUp.createAccount(email);
});

When(/^se ingresa con datos$/, async (table: any) => {
  let datos: any = table.hashes()[0];
  await SignUp.submitLogin(datos);
});

When(/^se intenta recuperar contrasenia$/, async () => {
  const forgotYourPasswordBtn = await SignUp.forgotYourPasswordBtn;
  forgotYourPasswordBtn.click();
});

When(
  /^se intenta recuperar contrasenia de cuenta (.+)$/,
  async (email: string) => {
    const forgotYourPasswordBtn = await SignUp.forgotYourPasswordBtn;
    forgotYourPasswordBtn.click();
    const emailInput = await SignUp.emailInput;
    const retrievePasswordBtn = await SignUp.retrievePasswordBtn;
    emailInput.setValue(email);
    retrievePasswordBtn.click();
  }
);

Then(/^se alerta que el email ya esta registrado$/, async () => {
  const warningAlert = await SignUp.warningAlert;
  expect(warningAlert.getText()).toHaveTextContaining(
    "An account using this email address has already been registered. Please enter a valid password or request a new one."
  );
});

Then(/^se alerta que la autenticacion fue fallida$/, async () => {
  const alertWarning = await SignUp.authenticationWarningAlert;
  expect(alertWarning.getText()).toHaveTextContaining("Authentication failed.");
});

Then(/^se puede recuperar contrasenia$/, async () => {
  const headerForm = await SignUp.headerForm;
  expect(headerForm.getText()).toHaveTextContaining("Forgot your password?");
});

Then(
  /^se envio confirmacion de contrasenia a mail (.+)$/,
  async (email: string) => {
    const confirmationAlert = await SignUp.confirmationAlert;
    let expectedText: string =
      "A confirmation email has been sent to your address: " + email;
    expect(confirmationAlert.getText()).toHaveTextContaining(expectedText);
  }
);

When(/^se intenta recuperar contrasenia de cuenta vacia$/, async () => {
  await SignUp.forgotYourPasswordBtn.click();
  await SignUp.retrievePasswordBtn.click();
});

Then(/^se alerta de que el mail es invalido$/, async () => {
  const invalidEmailWarning = await SignUp.invalidEmailAlert;
  expect(invalidEmailWarning.getText()).toHaveTextContaining(
    "Invalid email address."
  );
});