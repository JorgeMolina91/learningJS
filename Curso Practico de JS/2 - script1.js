const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("#btncalcular");
const pResult = document.querySelector("#result");

function btnOnClick(){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}
//El parseInt() es una funcion que tambien convierte un string en Integer


