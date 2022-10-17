/*
Los arrays son una estructura de datos y un tipo objeto, es decir, es un valor que va a guardar mas valores
dentro de el. 
Es una lista de datos.
Puede guardar distintos tipos de datos: Numbers, Strings, Booleans, etc. 
Incluso pueden haber arrays dentro de arrays. 
*/

var frutas = ["Manzana", "Banano", "Cereza", "Fresa"]; // Asi se declara un array
console.log(frutas); // Asi se accede a todo el array

console.log(frutas.length); //De esta forma es posible ver cuantos elementos tiene el array en cuestion

console.log(frutas[0]); // Asi se accede a un dato especifico dentro del array, poniendo su indice dentro 
//de los corchetes. Hay que recordar que en computación, siempre se empieza a contar desde 0

//Hay 2 tipos de metodos en los arrays: 1. Metodos para mutar o cambiar el contenido del array

var masFrutas = frutas.push("Uva"); //Va a empujar un elemento nuevo al final del array
console.log(frutas); //["Manzana", "Banano", "Cereza", "Fresa", "Uva"]

var ultimo = frutas.pop(); //Elimina el ultimo elemento del array
console.log(frutas); //["Manzana", "Banano", "Cereza", "Fresa"]

var nuevaLongitud = frutas.unshift("Uva"); //Pone el elemento que se pase al principio del array en vez 
//de al final como con push
console.log(frutas); 

var borrarFruta = frutas.shift();//Elimina el primer elemento del array
console.log(frutas); //["Manzana", "Banano", "Cereza", "Fresa"]

var posicion = frutas.indexOf("Cereza");//Permite saber la posicion del elemento que se pase como paramtero 
console.log(posicion);// 2