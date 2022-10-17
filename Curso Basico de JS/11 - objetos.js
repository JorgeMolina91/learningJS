/*
JS es un lenguaje que esta diseñado en el paradigma de objetos!

El paradigma de objetos es la forma en que se trata de replicar un objeto de la vida real a un lenguaje de 
programacion.

Los objetos tienes propiedades y metodos (funciones).

Por ejemplo, un carro, tiene propiedades (color, marca, año de fabricación, numero de llantas, 
numero de puertas, etc.); y tiene metodos (prender, apagar, frenar, virar a la derecha,
virar a la izquierda, etc)

Las propiedades es una combinación entre palabras claves y valores. nombre: "Jorge", apellido: "Molina"...
*/

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
}; 

miAuto //{marca: 'Toyota', modelo: 'Corolla', annio: 2020}

//La forma de acceder a cualquier propiedad es con el nombre del objeto, punto y el nombre de la propiedad
miAuto.annio //2020
miAuto.marca //'Toyota'

//Dentro de los objetos, se pueden poner funciones (metodos) que interactuen con las propiedades del objeto, como
//si fueran variables (que de hecho son una forma de variables)

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Este Auto es de marca ${this.marca}, ${this.modelo} y es del año ${this.annio}`)
    }
}; 
//this una variable que hace referencia a la propiedad del objeto que quiera usar o llamar. 'this.propiedad'

_______________________________

//FUNCION CONSTRUCTORA

//Esto se usa para tener una plantilla para crear un objeto un numero grande de veces, sin tener que armar
//uno por uno, es decir, es una especie de loop para poder crear el objeto cuantas veces quiera sin 
//re-escribir muchas veces las propiedades, metodos, etc.

//La forma en que se crea un objeto es con una variable, porque se guardan ahi las propiedades y metodos 
//individuales de ese objeto, pero para hacer la plantilla debe ser, como su nombre lo indica, con una 
//funcion

function auto(marca, modelo, annio, detalleDelAuto){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.detalleDelAuto = function(){
        console.log(`Este Auto es de marca ${this.marca}, ${this.modelo} y es del año ${this.annio}`)
    }
}

//Para crear un objeto a partir de la plantilla (funcion) que se arma, se debe hacer con una variable, porque
//va a ser un objeto, y se debe poner la palabra 'new' porque va a ser una nueva instancia de esa plantilla

var nuevoAuto = new auto("Audi", "A5", 2022);
var nuevoAuto2 = new auto("Tesla", "Model 3", 2020);

//La funcion 'detalleDelAuto' queda guardada dentro de cada nueva instancia del objeto 'auto', y se puede
//llamar con los datos que se pasen con cada nueva instancia... El metodo seguira funcionando, solo cambiaran
//los datos


























