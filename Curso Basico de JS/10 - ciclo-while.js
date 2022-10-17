var estudiantes = ["Jorge", "Luis", "Adriana", "De la Merced"]; 

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
    console.log(estudiantes);
}
//Este ciclo funciona mientras se cumple la función que se pasa como parametro.
//En este caso, va a ir llamando a cada uno de los elementos del array 'estudiantes', ejecuta la funcion
//'saludarEstudiantes', y con el metodo 'shift' de los array, va a ir eliminando el elemento que vaya usando
