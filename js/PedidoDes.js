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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const salir = document.getElementById("x")
const imgPed = document.getElementById("imgPed")
const nombre = document.getElementById("nombre");
const nombreUsuario = document.getElementById("nombreUsuario")
const des = document.getElementById("des");
const beb = document.getElementById("beb");
const pos = document.getElementById("pos");
const est = document.getElementById("est");
const coments = document.getElementById("comentarios");
const terminadoBtn = document.getElementById("end_ped");
const entregadoBtn = document.getElementById("entregado");
const storage = window.localStorage;
const idPedido = storage.getItem("id");
const nombreStorage = storage.getItem("nombreStorage");

nombreUsuario.innerHTML = nombreStorage;

database.ref().child("pedidos").child(idPedido).on("value", function (snapshot) {
    var pedidoObj = snapshot.val();
    var nombrePlato = pedidoObj.nombrePlato;
    var descripcion = pedidoObj.descripcion;
    var bebida = pedidoObj.bebida;
    var postre = pedidoObj.postre;
    var estado = pedidoObj.estado;
    var comentarios = pedidoObj.comentario;

    switch (pedidoObj.nombrePlato) {
        case "Pollo colombiano":
            imgPed.src = "imgs/pollocolombiano.svg";
            break;
        case "Pasta oriental":
            imgPed.src = "imgs/pastaoriental.svg";
            break;
        case "Albondigas":
            imgPed.src = "imgs/albondigasitalianas.svg";
            break;
        case "Pollo con langostinos":
            imgPed.src = "imgs/pastaconlangostinos.svg";
            break;
        case "Pinchos de pollo":
            imgPed.src = "imgs/pinchosdepollo.svg";
            break;
        case "Pollo a la naranja":
            imgPed.src = "imgs/polloalanaranja.svg";
            break;

    }

    nombre.innerHTML = nombrePlato + " - Para: " + idPedido;
    des.innerHTML = "Descripción: " + descripcion;
    beb.innerHTML = "Bebida: " + bebida;
    pos.innerHTML = "Postre: " + postre;
    est.innerHTML = "Estado: " + estado;
    coments.innerHTML = comentarios;

});

cerrarSesion.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "/index.html";
});

salir.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "/Pedido.html";
});

terminadoBtn.addEventListener("click", function (event) {
    database.ref('pedidos/').child(idPedido).child("estado").set("Pedido listo");
});

entregadoBtn.addEventListener("click", function (event) {
    database.ref('pedidos/').child(idPedido).remove();
    window.location.href = "/Pedido.html";
});