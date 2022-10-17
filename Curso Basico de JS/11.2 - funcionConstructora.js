//Sirve para crear instancias de un objeto de forma que no se tenga que estar escribiendo cada vez
//los valores de cada objeto por separado, sino hacerlo de forma automatica

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];

while(autos.length < 10){
    var marca_u = prompt("Marca: ");
    var modelo_u = prompt("Modelo: ");
    var annio_u = prompt("Año: ");
    autos.push(new auto(marca_u, modelo_u, annio_u));
    //console.log(autos); - Al poner este console.log aqui, me va a imprimir iterativamente todos loa carros
    //para evitar eso, hay que poner el console.log afuera
}
for(var i = 0; i < autos.length; i++){
    console.log(`Tu carro es un ${autos[i].marca}, modelo ${autos[i].modelo} y es del año ${autos[i].annio}`);
}
//En los arrays, no puedo acceder a un dato especifico, solo se puede acceder al indice, agregar o
//quitar informacion y asi... Los objetos, en cambio, si me permiten acceder a un dato especifico. Para acceder a una posición
//tengo que hacerlo con el nombre del objeto, el indice entre corchetes cuadrados '[]' y el indice dentro, punto la propiedad a la
//que quiera acceder.
_______________________________

var autos = [];

function auto(marca, modelo, color) {
  this.marca = marca;
  this.modelo = modelo; 
  this.color = color; 
}

for (var i = 0; i < 5; i++ ) {
    var marca_u = prompt("Marca: ");
    var modelo_u = prompt("Modelo: ");
    var annio_u = prompt("Año: ");
    var autoNuevo = new auto (marca_u, modelo_u, annio_u);
    var agregarAuto = autos.push(autoNuevo);
}
console.log(autos);
