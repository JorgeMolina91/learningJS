//Los ciclos se usan para hacer tareas de forma repetitiva, mientras se cumpla 'x' o 'y' condicion

var estudiantes = ["Jorge", "Luis", "Adriana", "De la Merced"]; 
//Aqui se esta generando un array con nombre de estudiantes

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
} 
//Con esta funcion lo que se quiere es saludar a los estudiantes, y que vaya saludando a cada estudiante si
//se van a gregando mas

//Forma # 1
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//Forma # 2
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}