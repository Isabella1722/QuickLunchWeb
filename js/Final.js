var logged = localStorage.getItem('logged')

if (logged == 'true') {
  document.location.href = "Pedido.html"
}

const inicioBtn = document.getElementById("finalBtn");

inicioBtn.addEventListener("click", function() {
    document.location.href = "index.html"
});