"use strict"; // Javascript de manera estricta

// tipos de variables
let a; // local
const b = 0; // constante y local

var c; // global

/* scope - contexto
espacil en el que vive la variable */

// tipos de datos

// string
let cadena = "hola Mundo!";
let cadena2 = "hola Mundo";

// Number
let numero = 5;
let numero2 = 5.232;
let numero3 = -5.54;

// Boolean

let boleano = true;
let boleano2 = false;

// undefined
let variable;
// console.log(variable);

// null

// NaN not a number - no es un numero

// plantillas literales - template strings/literal strings

/* console.log(`Esta es una cadena ${5 + 4}`);
console.log("Esta es una cadena normal ${5+4}");

let nombre = "Alejandro"; */
/* let presentacion = ``; */
/* console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`); */

// Arreglos - matrices - arrays

let arr = [1, "A", null, undefined, [true, false]];
// notación de corchetes
console.log(arr[4][0]);
let arr2 = new Array("B", 2);
console.log(arr2);

// Objetos
// clave / valor
const persona = {
  nombre: "Alejandro",
  edad: 25,
  hobbie: ["Leer", "jugar", "mimir"],
  auto: {
    marca: "VW",
    modelo: "Pointer",
    year: 2000,
  },
  saludar: function () {
    return "S   aludar";
  },
};

persona.nombre = "Panchito";

console.log("mi nombre es " + persona.nombre);
console.log(`mi  nombre es ${persona.nombre}`);

console.log(`mi hobbie favorito es ${persona.hobbie[1]}`);
console.log(`La marca de mi carro es es ${persona.auto.marca}`);

console.log(persona.saludar());
