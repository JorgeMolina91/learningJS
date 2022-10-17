/*
Es cuando se convierte un tipo de dato a otro
*/

//Coerción implícita

var a = 4 + "7";
typeof a; //String => Porque JS asume que quiero usar un String en vez de un Number

var b = 4 * "7";
typeof b;//Number => Por la misma razón de arriba

//Coerción Explicita

var c = Number(a); 
typeof c;// Number => Aquí le estoy indicando a JS que convierta el String de arriba a Number 

var d = String(b); 
typeof d;//String => Por la misma razón de arriba