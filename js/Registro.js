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

//Instanciar
const nombreIT = document.getElementById("nombreIT");
const cedulaIT = document.getElementById("cedulaIT");
const codigoTrabajoIT = document.getElementById("codigoTrabajoIT");
const claveUnoIT = document.getElementById("claveUnoIT");
const claveDosIT = document.getElementById("claveDosIT");
const condCheckBox = document.getElementById("condCheckBox");
const registroBtn = document.getElementById("registroBtn");
const database = firebase.database();
const storage = window.localStorage;

registroBtn.addEventListener("click", function () {
  let nombre = nombreIT.value;
  let cedula = cedulaIT.value;
  let codigoTrabajo = codigoTrabajoIT.value;
  let clave = claveUnoIT.value;
  let confirmarClave = claveDosIT.value;
  let id = database.ref().child("trabajadores").push().key;
  let usuario = new Usuario(id, nombre, cedula, codigoTrabajo, clave);

  let estaRegistrado = false;

  // Leer lista de trabajadores
  database.ref().child("trabajadores").once('value', function (snapshot) {

    let lista = [];
    snapshot.forEach(dato => {
      let registrado = dato.val();
      lista.push(registrado);
    });

    // Comprobar si ya esta registrado
    for (let i = 0; i < lista.length; i++) {
      let cedulaFb = lista[i].cedula;

      if (usuario.cedula == cedulaFb) {
        estaRegistrado = true;
        break;
      }
    }

    if (estaRegistrado == false && usuario.clave == confirmarClave && nombre != "" && cedula != ""
      && codigoTrabajo != "" && clave != "" && condCheckBox.checked == true) {
      //REGISTRAR TRABAJADORES EN UNA RAMA 
      database.ref().child("trabajadores").child(id).set(usuario);
      storage.setItem("nombreStorage", usuario.nombre);
      window.location.href = "Pedido.html";

    } else if (estaRegistrado == true) {
      alert("El usuario ya está registrado");

    } else if (usuario.clave != confirmarClave) {
      alert("Las claves no coinciden");

    } else if (condCheckBox.checked == false) {
      alert("Debes aceptar los términos y condiciones");

    } else {
      alert("Completa los campos y acepta los términos y condiciones");
    }
  });
});
