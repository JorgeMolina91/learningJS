//Estos metodos son para eliminar elementos de un array

//push: sirve para añadir elementos al final de un array.

var numArray = [1, 2, 3, 4];
function newNum (){
    numArray.push(6, 7);
    console.log(numArray)
};
newNum();// [1, 2, 3, 4, 6, 7]
____________________

var nombresPersonas = ["Jorge", "Luis", "Adriana", "De la Merced"];
function newNombre(){
    nombresPersonas.push("Pedro", "Jose");
    console.log(nombresPersonas);
}
newNombre(); // ['Jorge', 'Luis', 'Adriana', 'De la Merced', 'Pedro', 'Jose']
_____________________

//shift: Elimina el primer elemento de un array

var numArray = [1, 2, 3, 4];
console.log(numArray); // [1, 2, 3, 4]

var shortArray = numArray.shift();
console.log(numArray) // [2, 3, 4]

//pop: Elimina el ultimo elemento de un array

var numArray = [1, 2, 3, 4];
console.log(numArray); // [1, 2, 3, 4]

var shortArray = numArray.pop();
console.log(numArray) // [1, 2, 3]