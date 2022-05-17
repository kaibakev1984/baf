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