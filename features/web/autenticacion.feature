@debug
Feature: Autenticacion
    Background: Precondiciones
        Given ingreso a pagina principal
        And acceso a autenticacion

    Scenario Outline: creacion de cuenta con email registrado
        When creacion de cuenta con email <email>
        Then se alerta que el email ya esta registrado
        Examples:
            | email         |
            | test@test.com |

    Scenario Outline: ingreso con datos erroneos
        When se ingresa con datos
            | email   | password   |
            | <email> | <password> |
        Then se alerta que la autenticacion fue fallida
        Examples:
            | email            | password |
            | test@test.com.ar | 123456   |

    Scenario: acceso a recuperacion de contrasenia
        When se intenta recuperar contrasenia
        Then se puede recuperar contrasenia

    Scenario Outline: envio de mail de confirmacion de contrasenia
        When se intenta recuperar contrasenia de cuenta <email>
        Then se envio confirmacion de contrasenia a mail <email>
        Examples:
            | email         |
            | test@test.com |