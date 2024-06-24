// Este código se ejecutará cuando la página se cargue por completo
window.onload = function() {
    // Obtenemos el elemento que contiene los productos
    var productos = document.getElementById("productos");
  
    // Recorremos los productos
    for (var i = 0; i < productos.children.length; i++) {
      // Obtenemos el elemento actual
      var producto = productos.children[i];
  
      // Agregamos un evento de clic al elemento
      producto.addEventListener("click", function() {
        // Mostramos un mensaje de confirmación
        alert("Has seleccionado el producto " + producto.querySelector("h3").textContent);
      });
    }
  };
  <script>
  document.querySelector("a").addEventListener("click", function() {
    window.open("login.html", "_blank")
  };
</script>
