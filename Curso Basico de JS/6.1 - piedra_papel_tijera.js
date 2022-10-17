// Juego piedra papel o tijera

//1. Aqui solicito el input del usuario
var usuario = Number(prompt("Piedra: 0, Papel: 1, Tijera: 2 -- Escoge una opción: "))

//2. Aquí traté de usar un numero random entre 0 y 2 para tener la opcion de la PC
var compu = Math.floor(Math.random()*3);
if (compu === 0){
    var Piedra = compu;
}else if(compu === 1){
    var Papel = compu;
}else if(compu === 2){
    var Tijera = compu;
}
console.log(compu);
//Con el resultado de PC, lo que haré será compararlo con el resultado del usuario

__________________
function Juego(usuario, compu){
    //1. Aqui solicito el input del usuario
    var usuario = Number(prompt("Piedra: 0, Papel: 1, Tijera: 2 -- Escoge una opción: "))
    //2. Aquí usaré un numero random entre 0 y 2 para tener la opcion de la PC
    var compu = Math.floor(Math.random()*3);
    console.log(compu);
    
    if (usuario == compu){
        alert("¡Empate! Intenta nuevamente");
        Juego();
    }else if(usuario == 0 && compu == 2){
        alert("¡Gana Usuario!")
    }else if(usuario == 1 && compu == 0){
        alert("¡Gana Usuario!")
    }else if(usuario == 2 && compu == 1){
    }else if(usuario == 0 && compu == 1){
        alert("¡Gana PC!")
    }else if(usuario == 1 && compu == 2){
        alert("¡Gana PC!")
    }else if(usuario == 2 && compu == 0){
        alert("¡Gana PC!")
    }
    else{
        alert("¡Pilo! Escoge una opción que sea correcta")
        Juego();
    }
}
Juego();

____________________
var usuario = Number(prompt("Piedra: 0, Papel: 1, Tijera: 2 -- Escoge una opción: "))

var compu = Math.floor(Math.random()*3);
console.log(compu);

var resultado = function(usuario, compu){
    if(usuario != compu){
        if(usuario == 0 && compu == 2){
            alert("¡Gana Usuario!")
        }else if(usuario == 1 && compu == 0){
            alert("¡Gana Usuario!")
        }else if(usuario == 2 && compu == 1){
            alert("¡Gana Usuario!")
        }else if(usuario == 0 && compu == 1){
            alert("¡Gana PC!")
        }else if(usuario == 1 && compu == 2){
            alert("¡Gana PC!")
        }else if(usuario == 2 && compu == 0){
            alert("¡Gana PC!")
        }
    }else if(usuario === compu){
        alert("¡Empate! Intenta nuevamente");
        Juego();
    }else{
        alert("¡Pilo! Escoge una opción que sea correcta")
        Juego();
    }
}
resultado(usuario, compu)