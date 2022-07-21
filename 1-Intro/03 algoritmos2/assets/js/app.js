function saludar() {
  console.log("Hola Mundo");
}

//saludar();

// arreglos

let num = [];
console.log(num);

let arr1 = new Array();
console.log(arr1);

// usar un arreglo

const arr = [1, 2, 3, 4, 5];
console.log(arr);
// notación de corchetes []
console.log(arr[3]);

arr[5] = 25;
arr[6] = 8;
arr[6] = 0;
// arr[7] =undefined
// arr[8] =undefined
// arr[9] =undefined
arr[8] = 9;
arr[10] = 40;
console.log(arr);

// propiedades de los arreglos
// descripción de nuestro arreglo
console.log(arr.length);

//métodos
// acciones que puede realizar un arreglo

const frutas = ["Manzana", "Platano"];
console.log(frutas);

// push()
// nos permite agregar un valor al final del arreglo
let fruta = "Toronja";

frutas.push("Naranja");
frutas.push(fruta);

console.log(frutas);

// pop()
// quita un elemento del final del arreglo

let elementoBorrado = frutas.pop();
console.log(frutas);
console.log(elementoBorrado);

// unshift()
// agrega un elemento al inicio del arreglo

let = devolver = frutas.unshift("Uva", "Pera");
console.log(frutas);
console.log(devolver);

// shift
// elimina un elemento del inicio de un arreglo

frutas.shift();
frutas.shift();
let frutaQuitada1 = frutas.shift();
let frutaQuitada = frutas.shift();
console.log(frutas);
console.log(frutaQuitada1);
console.log(frutaQuitada);

// arrglo multidimensional
const newArr = [
  1,
  45,
  "Hola",
  "Adios",
  true,
  null,
  [30, 31, 32],
  ["Azul", "Amarillo", "Verde"],
];

console.log(newArr);
console.log(newArr[6][1]);
console.log(newArr[7][1]);

// objetos
// estructura especial llamada objeto
// nos permite gurdar pares de valores
// key - value
// llave - valor

const obj = {
  nombre: "Pedro",
  edad: 25,
  color: "Azul",
  hobbies: ["Leer", "Correr"],
  niuArr: newArr
};

console.log(obj.edad); //para mostrar un solo dato
console.log(obj.hobbies[1]); //incluso ver los valores de un arreglo
 