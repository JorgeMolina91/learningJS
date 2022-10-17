const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("#btncalcular");
const pResult = document.querySelector("#result");

//Caso 1
boton.addEventListener('click', btnOnClick); 
function btnOnClick(){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}

//Lo que hace esta funcion es que escucha cada vez que ocurra un evento en el elemento seleccionado. 
//Tiene 2 argumentos: 1.Nombre del evento 2.Codigo JS que llamemos cuando suceda el evento
//En este caso se llama a la funcion btnOnClick sin parentesis, es porque en realidad la funcion es el addEventListener,
//Si se le pusiera los parentesis al btnOnClick se estaria como llamando 2 vececs..

//Caso 2
form.addEventListener('submit', sumarInputValues); 

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();//Este preventDefault previene que se ejecute lo que por defecto viene en el submit,
    //entonces nos deja ver la informacion sin que se recargue la pagina como suele pasar cuando se hace submit
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}
