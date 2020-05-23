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

const iniciarBtn = document.getElementById("iniciarBtn");
const registrarBtn = document.getElementById("registrarBtn");
const database = firebase.database();



iniciarBtn.addEventListener("click", function () {

  window.location.href = "IniciarSesion.html";

});



registrarBtn.addEventListener("click", function () {

  window.location.href = "Registro.html";

});



