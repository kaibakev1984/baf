Feature: Buscador de productos
    Como usuario quiero cargar productos desde el buscador

    Scenario: carga de producto sin haber ingresado valor en buscador
        Given pagina principal de automation practice
        When se hace busqueda con campo search vacio
        Then el sistema pide que se ingrese un valor

    Scenario: carga de producto Shirt
        Given pagina principal de automation practice
        When cargo producto Shirt en el buscador
        Then tengo resultados para el producto Shirt

    Scenario: agregar producto a carrito de compras y continuar en pantalla de productos
        Given carga de producto 
        When carga de producto al carrito y continuar
        Then se tienen resultados para el producto Shirt