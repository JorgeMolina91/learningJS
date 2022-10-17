//En los arrays hay metodos que nos permitian mutar el contenido del array, es decir, agregar, borrar, etc.
//Pero tambien hay metodos para poder recorrer un array

var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 15000},
    {nombre: "Audifonos", costo: 1850},
    {nombre: "Mouse", costo: 5000},
];

//filter: Este metodo me va a ayudar a validar si algo es verdad o falso y lo mete en un nuevo array. Este metodo no
//modifica el array original
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});// {nombre: 'Libro', costo: 320} 

//map: Este metodo me va a ayudar a mapear ciertos articulos

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
}); // ['Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos', 'Mouse']

//find: Nos ayuda a encontrar coincidencias dentro del array. Este metodo devuelve el primer valor que coincida con la
//busqueda, y se dentendra sin verificar los siguientes valores
var encontrarArticulos = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});// {nombre: 'Laptop', costo: 20000}

//forEach: Este metodo no genera un nuevo array, solo hace el filtrado sobre el array que le pasemos
articulos.forEach(function(articulos){
    console.log(articulos.nombre);
});
/*
Bici
TV
Libro
Celular
Laptop
Teclado
Audifonos
Mouse
*/

//some: nos devuelve una validacion de verdadero o falso que cumpla con lo que pasamos como parametros, es decir,
//solo nos devolvera 'true' o 'false' si cumple con la condicion que estamos solicitando
var articulosBaratos = articulos.some(function(articulos){
    return articulos.costo <= 700;
});//true

    