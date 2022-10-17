//Paso 1: Creamos la función constructora
function datosAuto(marca, annio, color, descripcion){
    this.marca = marca;
    this.annio = annio;
    this.color = color;
    this.descripcion = function(){
        console.log(`Tienes un ${this.marca} del año ${this.annio} y es de color ${this.color}`);
    }
}

//Paso 2: Creamos una lista vacía de autos

var autos = [];

//Paso 3: Creamos una función para que el usuario agregue un nuevo carro con sus parámetros

while(autos.length < 2){
    var marca_usuario = prompt("Marca?");
    var annio_usuario = prompt("Año?");
    var color_usuario = prompt("Color?");
    autos.push(new datosAuto(marca_usuario, annio_usuario, color_usuario));
}
console.log(autos);

_____

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 5 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }