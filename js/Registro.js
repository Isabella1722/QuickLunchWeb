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
  const registroBtn= document.getElementById("registroBtn");
  const database = firebase.database();

  registroBtn.addEventListener("click", function(){

    let nombre = nombreIT.value;
    let cedula = cedulaIT.value;
    let codigoTrabajo = codigoTrabajoIT.value;
    let clave = claveUnoIT.value;

    let id =database.ref().child("trabajadores").push().key;
    let usuario = new Usuario(id, nombre, cedula, codigoTrabajo,clave); 
    //console.log(usuario);
    //REGISTRAR JUEGOS EN UNA RAMA 
    database.ref().child("trabajadores").child(id).set(usuario);
    window.location.href="Pedido.html";

  });
