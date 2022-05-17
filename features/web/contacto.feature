Feature: Contacto
    Como usuario que poder contactarme con el administrador

    Background: Precondiciones
        Given ingreso a pagina principal

    Scenario: envio de mensaje sin completar datos
        Given acceso a pagina de datos de contacto
        When envio de mensaje sin completar datos
        Then se alerta que la operacion es invalida

    Scenario Outline: envio de mensaje con datos completados
        Given acceso a pagina de datos de contacto
        When envio de mensaje con datos
            | cabecera   | email   | pedidoReferencia   | mensaje   |
            | <cabecera> | <email> | <pedidoReferencia> | <mensaje> |
        Then el envio de mensaje fue exitoso
        Examples:
            | cabecera  | email         | pedidoReferencia | mensaje            |
            | Webmaster | test@test.com | 1234             | Este es un mensaje |