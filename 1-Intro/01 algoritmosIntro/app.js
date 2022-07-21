//alert("Hola Mundo"); Comentario de una sola linea

/* comentario
de bloque   
atajo para hacer un comentario de bloque 
shift + alt + a
*/

// Variables

let miVariable = "Alejandro";

console.log(miVariable);

miVariable = 15;

console.log(miVariable);

const apellido = "Ramirez";

console.log(miVariable, apellido);

// Datos primitivos que maneja Javascript

// String -- cadena de texto
//  "Texto"    'Texto'

let variableCadena = "Texto mas texto 35";
console.log(variableCadena);

// Number - Numero
//  12345

let variableNumber = 3456;
variableNumber = variableNumber + 5;
console.log(variableNumber);

// concatenación
// unir dos cadenas de texto
// unir un texto con un numro
// solo ocurre con el signo de +

let a = 1;
let b = "1";
console.log(a + b);

// Boolean -- booleano
// dato lógico
// true   false

let verdadero = true;

let falso = false;

console.log(verdadero, falso);

// null - nulo, un valor vacío

let varNull = null;
console.log(varNull);

// undefined - indefinido - ausencia completa de valor
// es un estado
// variable declarada pero sin asignación de valor, esa variable es undefined

let variable;
console.log(variable + 1);

// typeof tipo de dato en una variable

let num1 = 456;
console.log(typeof num1);

let varBool = true;
console.log(typeof varBool);

console.log(typeof "Hola");

console.log(typeof 123);

console.log(typeof null);

console.log(typeof {});

let nombre = "Luis";
/*  para hacer una copia rapida es
shift + alt + "flecha hacia abajo" */

console.log("Mi nombre es:", nombre);
console.log("Mi nombre es: " + nombre);

/* 
Cuentame de ti.

Para esta actividad de manera individual, habrá que trabajar con Visual Studio Code.

Necesitas crear las siguientes variables;

-Nombre
-Número favorito 
Responder; Tienes mascotas (Si/No)

Imprimir en una pantalla

*/

let varNombre = "Luis Alejandro";
let numeroFavorito = "6";
let mascotas = "si";

console.log("mi nombre es: " + varNombre);
console.log("mi numero favorito es: " + numeroFavorito);
console.log("Tienes mascotas: " + mascotas);
