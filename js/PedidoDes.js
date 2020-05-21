var food = [
    {
        name: 'Pollo Colombiano',
        desc: 'Delicioso pollo apanado con la receta de la abuela, acompañado de ensalada primavera  (lechuga, tomate, aceitunas) y una porción de papás a la francesa.',
        bebida: 'Jugo de mora',
        postre: 'Tres leches'
    },
    ///.agregar x platos
]

var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('ped');
console.log(param);
//console.log(urlParams.has('ped'));

let obj = food.filter( f => f.name.replace(/ /g, '').toLowerCase() === param.toLowerCase());

console.log(obj)
imgPed.src = `imgs/${obj[0].name.replace(/ /g, '').toLowerCase()}.svg`;
tit.innerText = `Pedido ${obj[0].name}`;
des.innerText = `Pedido ${obj[0].desc}`;
beb.innerHTML = `<strong>Bebida:</strong> ${obj[0].bebida}`;
pos.innerHTML = `<strong>Bebida:</strong> ${obj[0].postre}`;