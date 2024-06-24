// Este código se ejecutará cuando el usuario haga clic en el botón de enviar
// Enviará los datos del formulario al archivo `contacto.php`

document.querySelector("input[type='submit']").addEventListener("click", function() {
    const formData = new FormData(document.querySelector("form"));
  
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "contacto.php");
    xhr.send(formData);
  });
  