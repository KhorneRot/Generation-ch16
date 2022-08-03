"use strict";

function miFuncion(a, b) {
  return a + b;
}

let resultado = miFuncion(3, 6);

console.log("resultado es: " + resultado);

// Funcion expresión o funcion anonima
// no lleva nombre la funcion

let suma = function (a, b) {
  return a + b;
};

let res = suma(2, 3);
let caracteres = "La suma es: "

console.log(caracteres  + res);


let resta = function (a, b) {
    return a - b;
  };
  
  res = resta(5, 3);
  let caracteres2 = "La resta es: "

  console.log(caracteres2 + res);


  let division = function (a, b) {
    return a / b;
  };
  
  res = division(6, 2);
  let caracteres3 = "La division es: "

  console.log(caracteres3 + res);
 
  let multiplicacion = function (a, b) {
    return a * b;
  };
  
  res = multiplicacion(6, 2);
  let caracteres4 = "La multiplicacion es: "

  console.log(caracteres4 + res);



//   Self invoking solo se invoca una vez no es reutilizable

(function (a, b){
    console.log("El resultado de self invoking es: " + (a + b));
}
)(3, 4)
