// control de flujo
/* 
let nombre = "Alejandro Ramirez";
let edad = 25; */

 let nombre = prompt("Escribe tu nombre");
console.log(nombre);

let edad = parseInt ( prompt("Escribe tu edad") )
console.log(edad);

if (nombre === "Alejandro Ramirez" && edad === 25) {
  // scope - contexto (el area que cubre {})
  console.log("Eres un");
  console.log("ALMUNO ❤"); //Emojis Windos +

} else if (nombre === "Jonathan" || nombre === "Victor" || nombre === "Raul") {
  console.log("Eres un");
  console.log("ADMIN 😉"); //Emojis Windos + .

} else if (nombre === "Marina") {
  console.log("Eres la");
  console.log("JEFA 😎"); //Emojis Windos + .

} else {
  console.log("Eres un");
  console.log("Desconocido 😜");
}
1212
console.log("Fin del programa"); 


/* 
let nombre = prompt("Escribe tu nombre");
console.log(nombre);
let edad = parseInt ( prompt("Escribe tu edad") )
console.log(edad);

if (edad <= 17) {
console.log("Eres menor de edad");
}
else {
    console.log("Eres mayor de edad");
}
 */