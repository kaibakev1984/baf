import { Given, Then, When } from "@cucumber/cucumber";

Given(/^pagina principal de automation practice$/, async () => {
  await browser.url("http://automationpractice.com/index.php");
  await browser.maximizeWindow();
});

Given(/^carga de producto$/, async () => {
  await browser.url("http://automationpractice.com/index.php");
  await browser.maximizeWindow();

  const searchInput = await $(" #search_query_top");
  const searchBtn = await $("//button[@name='submit_search']");

  searchInput.setValue("Shirt");
  searchBtn.click();

  const listBtn = await $("#list");
  listBtn.click();
});

When(/^se hace busqueda con campo search vacio$/, async () => {
  const searchBtn = await $("//button[@name='submit_search']");
  searchBtn.click();
});

When(/^cargo producto Shirt en el buscador$/, async () => {
  const searchInput = await $(" #search_query_top");
  const searchBtn = await $("//button[@name='submit_search']");
  searchInput.setValue("Shirt");
  searchBtn.click();
});

When(/^carga de producto al carrito y continuar$/, async () => {});

Then(/^el sistema pide que se ingrese un valor$/, async () => {
  const alertWarning = await $(".alert.alert-warning");
  expect(alertWarning.getText()).toHaveTextContaining(
    "Please enter a search keyword"
  );
});

Then(/^se tienen resultados para el producto Shirt$/, async () => {
  const resultHeader = await $(".lighter");
  expect(resultHeader.getText()).toHaveTextContaining("Shirt");
});
