// ejecutar con npm run start-web --cucumberOpts.tagExpression @debug
import { Given, Then, When } from "@cucumber/cucumber";

Given(/^ingreso a pagina principal$/, async () => {
  // Completar para pasar las pruebas
});

When(/^busqueda con campo search vacio$/, async () => {
  // Completar para pasar las pruebas
});

Then(/^se alerta que no hay valor ingresado$/, async () => {
  // Completar para pasar las pruebas
});

When(/^busqueda de producto (.+)$/, async (producto: string) => {
  // Completar para pasar las pruebas
});

Then(/^tengo resultados para el producto (.+)$/, async (producto: string) => {
  // Completar para pasar las pruebas
});

Given(/^acceso a pagina de datos de contacto$/, async () => {
  // Completar para pasar las pruebas
});

When(/^envio de mensaje sin completar datos$/, async () => {});

When(/^envio de mensaje con datos$/, async (dataTable: any) => {
  const datos: any = dataTable.hashes()[0];
  // datos es un 'diccionario' con claves
  // datos['cabecera']
  // datos['email']
  // datos['pedidoReferencia']
  // datos['mensaje']
});

Then(/^se alerta que la operacion es invalida$/, async () => {
  // Completar para pasar las pruebas
});

Then(/^el envio de mensaje fue exitoso$/, async () => {
  // Completar para pasar las pruebas
});

Given(/^acceso a autenticacion$/, async () => {
  // Completar para pasar las pruebas
});

When(/^creacion de cuenta con email (.+)$/, async (email: string) => {
  // Completar para pasar las pruebas
});

When(/^se ingresa con datos$/, async (dataTable: any) => {
  const datos: any = dataTable.hashes()[0];
  // datos es un 'diccionario' con claves
  // datos['email']
  // datos['password']
});

When(/^se intenta recuperar contrasenia$/, async () => {
  // Completar para pasar las pruebas
});

When(
  /^se intenta recuperar contrasenia de cuenta (.+)$/,
  async (email: string) => {
    // Completar para pasar las pruebas
  }
);

Then(/^se alerta que el email ya esta registrado$/, async () => {
  // Completar para pasar las pruebas
});

Then(/^se alerta que la autenticacion fue fallida$/, async () => {
  // Completar para pasar las pruebas
});

Then(/^se puede recuperar contrasenia$/, async () => {
  // Completar para pasar las pruebas
});

Then(
  /^se envio confirmacion de contrasenia a mail (.+)$/,
  async (email: string) => {
    // Completar para pasar las pruebas
  }
);

When(/^se intenta recuperar contrasenia de cuenta vacia$/, async () => {
  // Completar para pasar las pruebas
});

Then(/^se alerta de que el mail es invalido$/, async () => {
  // Completar para pasar las pruebas
});
