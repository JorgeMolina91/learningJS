//El switch funciona muy parecido al 'if/else if/else', pero la sintáxis es diferente. 
//El switch evalua las condiciones en forma de casos
//Si no se pone el break en las validaciones, el sistema evaluará todo y dará todas las opciones.

numero = 1;

switch(numero){
    case 1:
        console.log("Soy uno");
        break; // Aquí se valida la condición, y si el caso 1 se cumple, se rompe el ciclo y se sale.
        // Para eso precisamente está hecho el break
    case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("Soy un 100");
        break;
    default: //Este default es el equivalente del 'else' en un ciclo 'if'
        console.log("No soy nada")
}
//Soy uno

________________________________

const bienvenida = alert("Juego de Piedra, Papel o Tijera")
var usuario = Number(prompt("Elige: 0 Piedra, 1 Papel ó 2 Tijera"))
console.log("Usuario: " + usuario)
var compu = Math.floor(Math.random()*3)
console.log("Compu: " + compu)

switch(usuario, compu){
    case usuario == compu:
        alert("Empate!");
        break;
    case usuario == 0 & compu == 1:
        alert("Gana Compu!");
        break;
    case usuario == 1 & compu == 2:
        alert("Gana Compu!");
        break;
    case usuario == 2 & compu == 0:
        alert("Gana Compu!");
        break;
    case usuario == 1 & compu == 0:
        alert("Gana Usuario!");
        break;
    case usuario == 0 & compu == 2:
        alert("Gana Usuario!");
        break;
    case usuario == 2 & compu == 1:
        alert("Gana Usuario!");
        break;
    default:
        alert("Escoge una opción correcta!! ") 
}
// No funciona muy bien por ahora... Pero move on y lo reviso después
