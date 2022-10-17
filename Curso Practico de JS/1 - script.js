/*
Hay funciones que vienen incluidas en el JS sin necesidad de crearlas.
Cuando creamos elementos en el HTML, JS nos da unas opciones de funciones (con atributos y metodos) para poder
manipular los elementos HTML. los 'getElementBy...' o los 'querySelector...' son unas de las funciones mas conocidas
que nos da el DOM (Document Object Model), o el Modelo de objetos del documento (haciendo referencia a que todos los 
elementos que estan en el documento los toma como objetos... De ahi que tengan funciones y demas).

Para poder acceder a un elemento, se puede por medio de 'querySelector', que es la forma de ingresar una etiqueta 
directamente (ejemplo 1).
El 'querySelector' tambien funciona para llamar elementos con su selector (como en CSS). '#' para los id, y '.' para 
las clases
*/

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const parr = document.querySelector('#parr');
const input = document.querySelector('input');

//const pAll = document.querySelectorAll('p'); // Este 'querySelectorAll' selecciona a todos los elementos p en este caso
//especifico

//console.log(pALL);//NodeList(3) [p, p.parrafito, p#parr]

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    parr,
    input,
});

//h1.innerHTML = "Haciendo el Título de nuevo"; // Esta es la forma de manipular el HTML de un elemento. En este
//caso se pudo cambiar el titulo
//parr.innerHTML = "Este es un <strong>Nuevo</strong> parrafo"
// Este innerHTML es peligroso porque esta incluyendo cosas de JS y puede ser una vulnerabilidad???
//Lo mejor en estos casos es usar las otras alternativas que JS tiene para manipular, por ejemplo, el texto 
//de un archivo
parr.innerText = "Este es un <strong>Nuevo</strong> parrafo... <i>Que queee</i>" //  Aqui se puede ver que es solo
//texto, es decir, va a incluir literalmente TODO lo que se escriba
parr.innerHTML = "Este es un <strong>Nuevo</strong> parrafo... <i>Que queee</i>"// Aqui se puede ver que convierte
//todo a codigo HTML

console.log(p.getAttribute("propiedad"));//Con este metodo "getAttribute" lo que podemos tener es las propiedades que
//ese elemento HTML tenga
console.log(parr.getAttribute("id"));

p.setAttribute("propiedad", "otraClase"); // //Con este metodo "setAttribute" lo que hago es cambiarle algun atributo
//que tenga ese elemento de HTML. Se poner primero el atributo que quiero cambiar, y luego el nuevo valor de ese atributo
console.log(p.getAttribute("propiedad"));

h1.classList.add("h1", "h1otraVez"); // con 'classList.add()' puedo añadirle clases a un elemento HTML
h1.classList.remove("h1otraVez");// con 'classList.remove()' puedo quitarle clases a un elemento HTML

input.value = "Soy un Valor"; //Se puede ingresar directamente al atributo del elemento y modificarlo 

//Para crear un elemento de HTML desde JS
const img = document.createElement("img"); // Se crea el elemento img
img.setAttribute("src", "https://thumbs.dreamstime.com/z/fondo-vertical-de-muchas-peque%C3%B1as-hojas-verdes-en-la-selva-plantilla-para-el-blog-y-los-dise%C3%B1adores-152040315.jpg");
//Se le da el atributo src y se le pone la url de la imagen
console.log(img);
parr.append(img);// Se le envia la imagen creada al parrafo con id 'parr'