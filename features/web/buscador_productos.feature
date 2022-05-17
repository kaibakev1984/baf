Feature: Buscador de productos
Como usuario quiero cargar productos desde el buscador

  Scenario: carga de producto sin haber ingresado valor en buscador
    Given ingreso a pagina principal
     When busqueda con campo search vacio
     Then se alerta que no hay valor ingresado
  
  Scenario Outline: carga de producto Shirt
    Given ingreso a pagina principal
     When busqueda de producto <producto>
     Then tengo resultados para el producto Shirt
    Examples: 
      | producto | 
      | Shirt    | 
  
  Scenario Outline: agregar producto a carrito de compras y continuar en pantalla de productos
    Given ingreso a pagina principal
      And busqueda de producto <producto>
     When agrega producto a carrito
     Then se tienen resultados para el producto Shirt
    Examples: 
      | producto | 
      | Shirt    | 