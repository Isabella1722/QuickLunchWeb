var logged = localStorage.getItem('logged')

if (logged == 'true') {
  document.location.href = "Pedido.html"
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Instanciar
const cedulaIT = document.getElementById("cedulaIT");
const claveIT = document.getElementById("claveIT");
const iniciarBtn = document.getElementById("iniciarBtn");
const database = firebase.database();
const storage = window.localStorage;

// Iniciar sesion
iniciarBtn.addEventListener("click", function () {
  let cedula = cedulaIT.value;
  let clave = claveIT.value;
  let query = database.ref().child("trabajadores").orderByChild("cedula").equalTo(cedula.toString().trim());

  // Comprobar si el usuario esta registrado
  query.once('value', function (snapshot) {
    let usuario = null;

    snapshot.forEach(coincidencia => {
      usuario = coincidencia.val();
    });
   //Condicionar el inicio de sesión
    if (usuario == null) {
      alert("El usuario no está registrado");

    } else {
      // Comprobar si la clave es correcta
      if (usuario.clave == clave.toString().trim()) {
        storage.setItem("logged", 'true');
        storage.setItem("nombreStorage", usuario.nombre);
        window.location.href = "Pedido.html";
      } else {
        alert("La clave es incorrecta")
      }
    }
  });
});
