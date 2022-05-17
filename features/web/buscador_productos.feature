Feature: Buscador de productos
    Como usuario quiero cargar productos desde el buscador

    Background: Precondiciones
        Given ingreso a pagina principal

    Scenario: carga de producto sin haber ingresado valor en buscador
        When busqueda con campo search vacio
        Then se alerta que no hay valor ingresado

    Scenario Outline: carga de producto Shirt
        When busqueda de producto <producto>
        Then tengo resultados para el producto <producto>
        Examples:
            | producto |
            | Shirt    |
            | Shoes    |
            | Blouse   |
            | Dress    |