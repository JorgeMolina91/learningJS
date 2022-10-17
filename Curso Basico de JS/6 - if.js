if (true){
    console.log("Hola");
}// Hola

if (false){
    console.log("Hola");
}// undefined
 

if (true){
    console.log("Hola");
}else{
    console.log("Nada");
}// Hola

if (false){
    console.log("Hola");
}else{
    console.log("Falso");
}// Falso


if (5 > 1){
    console.log("Mayor")
}else if (5 < 1){
    console.log("Menor")
}else{
    console.log("Igual")
}

// Piedra, papel o Tijera

var usuario = prompt("¿Piedra, Papel o Tijera?");
var pc = "Piedra"

if (usuario == "Piedra"){
    alert("Iguales")
}else if (usuario == "Papel"){
    alert("Ganaste")
}else if(usuario == "Tijera"){
    alert("Perdiste")
}else{
    alert("¿Papi que?")
}


//Votando

var edad = prompt("¿Cuál es tu edad?: ");
var edad_numero = Number(edad);
var permitido_votar = 18;

if (edad_numero < permitido_votar){
    alert("¡Estás muy pequeño para votar!")
}else if (edad_numero === permitido_votar){
    alert("Puedes votar por primera vez")
}else if (edad_numero >= permitido_votar){
    alert("Puedes votar. ¡Ingresa!")
}else{
    alert("Por favor ingresa un valor valido")
}

//Operador ternario
//condition ? true : false; 

var numero = 1;
var resultado = numero === 1 ? "Si es el resultado" : "No era lo que quería";
console.log(resultado); //Si es el resultado 

var numero = Number(prompt("¿Me das un número de 1 a 10? "));
var numero_dado = numero >= 5 ? "Es mayor a 5" : "Es menor a 5"; //Solo acepta 2 comparaciones! 
console.log(numero_dado);