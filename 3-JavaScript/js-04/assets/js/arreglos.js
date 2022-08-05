// Arreglos
// Colección de elementos
// Cada elemento ocupa una posición
// Esa posición se conoce como indice y comienza a partir de 0

let arr = [1, 2, 3, 4];
console.log(arr);

// Propiedades - describen
// métodos - acciones que puede realizar

console.log(arr[2]);

arr[4] = 190;

console.log(arr);

arr[4] = "Hola";

console.log(arr);

// métodos de arreglos

const arreglo = ["adiós"];

// agrega un elemento al final
arreglo.push(2);
arreglo.push(false);
let num = 500;
arreglo.push(num);

// agrega un elemento al incio
arreglo.unshift("A");
arreglo.unshift("B");
console.log(arreglo);

// quita un elemento
arreglo.pop();
console.log(arreglo);

// shift
// quiera un elemento al inicio del arreglo
let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);

// splice()
// quita una parte de cualquier posicion de nuestro arreglo
// permite remplazar un elemento
// permite insertar un elemento en una posicion en especifico

arreglo.splice(1, 1, "pepepicapapasconunpico", 9383);
console.log(arreglo);





// metodos que no modifican el arreglo original
// hacen una copia, modifican esa copia 

// slice()
// cortar partes de un arreglo

let dato3 = arreglo.slice(0, 2);

console.log(arreglo);

console.log(dato3);