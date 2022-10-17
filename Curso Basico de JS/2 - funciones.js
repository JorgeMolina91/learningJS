// Declarativas
function miFuncion(){
    return 3;
}
miFuncion();

// Expresiva

var miSegundaFuncion = function(a, b){
    return a + b;
}

miSegundaFuncion (8, 9);

// Una forma de declarar una variable y pasarla por parámetro a una función
nombre = "Jorge";

function saludar(nombre){
    console.log("Hola " + nombre)
}
saludar()

// Una mejor forma de hacer lo mismo de arriba
function saludar2(nombre){
    console.log(`Hola ${nombre}`)
}
saludar("Jorge")
saludar("Luis")

//Se puede usar la plabra reservada return para devolver alguna información que requeramos
function suma(a, b){
    var resultado = a + b;
    return resultado;
}
suma(85, 5);

//Variables globales y locales
var miNombre = "Jorge"; //Variable Global

function nombreCompleto(){
    var miApellido = "Molina"; // Variable Local - No se puede llamar fuera de la función
    console.log(miNombre + " " + miApellido);
}

nombreCompleto();