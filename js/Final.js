// Comprobar si el usuario ha iniciado sesion
var logged = localStorage.getItem('logged')

if (logged == 'true') {
  document.location.href = "Pedido.html"
}

// Instanciar boton
const inicioBtn = document.getElementById("finalBtn");

// Enviar al usuario a inicio al hacer click en el boton
inicioBtn.addEventListener("click", function() {
    document.location.href = "index.html"
});