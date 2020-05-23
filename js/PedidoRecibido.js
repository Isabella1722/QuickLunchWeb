// Comprobar si el usuario ha iniciado sesion
var logged = localStorage.getItem('logged')

if (logged == 'false') {
  document.location.href = "index.html"
}

var firebaseConfig = {
  apiKey: "AIzaSyD4F5NfFJYqwkmyboa0KnhBVH0W1tRp0c4",
  authDomain: "quicklunch-51d9a.firebaseapp.com",
  databaseURL: "https://quicklunch-51d9a.firebaseio.com",
  projectId: "quicklunch-51d9a",
  storageBucket: "quicklunch-51d9a.appspot.com",
  messagingSenderId: "171443386236",
  appId: "1:171443386236:web:1e0819d806518530d7d6f9",
  measurementId: "G-JXCJ14PVYZ"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Instanciar 
const database = firebase.database();
const usuario = document.getElementById("usuario");
const listaPedidos = document.getElementById("listaPedidos");
const storage = window.localStorage;
const cerrarSesion = document.getElementById("cerrarSesion");
const nombreStorage = storage.getItem("nombreStorage");
const totalPedidos = document.getElementById("totalPedidos");
const tituloLista = document.getElementById("tituloLista");

usuario.innerHTML = nombreStorage;


// Acción del botón para que el usuario cierre sesión y se mande al html del index
cerrarSesion.addEventListener("click", function (event) {
  event.preventDefault();
  storage.setItem("logged", 'false');
  window.location.href = "/final.html";
});

//Llamar la rama pedido y agregarla a la lista de pedidos
database.ref().child("pedidos").on("child_added", function (snapshot) {
  tituloLista.innerHTML = "Pedidos"
  var pedidoObj = snapshot.val();
  var item = document.createElement("li");
  var enlace = document.createElement("a");
  enlace.id = pedidoObj.id;

  enlace.innerHTML = pedidoObj.nombrePlato + " - " + pedidoObj.id;
  enlace.href = "#";
  item.appendChild(enlace);
  listaPedidos.appendChild(item);

  document.getElementById(pedidoObj.id).addEventListener("click", function (event) {
    event.preventDefault();
    storage.setItem("id", pedidoObj.id);
    window.location.href = "/PedidoDes.html";
  });

  //Llamar a todos los elementos de la rama pedidos y contar los pedidos recibidos
  database.ref().child("pedidos").on("value", function (snapshot) {
    var numeroPedidos = snapshot.numChildren();
    totalPedidos.innerHTML = "Total de pedidos: " + numeroPedidos;
    console.log(numeroPedidos);
  });


});

