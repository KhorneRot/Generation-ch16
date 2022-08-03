// control de flujo
//  condicionales
// if

let condicion = "B";

if (condicion === "A") {
  /* 
    Codigoque se hace si se cumple la condicion A
*/
  console.log("Entro en la condicion A");
} else if (condicion === "B") {
  /* 
    Codigoque se hace si se cumple la condicion B
*/
  console.log("Entro en la condicion B");
} else if (condicion === "C") {
  /* 
        Codigoque se hace si se cumple la condicion B
    */

  console.log("Entro en la condicion C");
} else {
  /* Condigo que se hace si no se cumple ninguna de las condiciones anteriores */
  console.log("No cumple ninguna");
}

// Switch se utiliza para evaluar expreciones
// == o === regresa un true si la condicion se cumple

let nuevaCondicion = "Adios";

switch (nuevaCondicion) {
  case "Hola":
    console.log("Buenos dias");
    console.log("Espero que te encuentres bien");
    break;
  case "Adios":
    console.log("Nos vemos");
    break;
  case "Saludo":
    console.log("Te mando un saludo");
    break;

  default:
    console.log("No entendi tu mensaje");
}

let edad = 30;

switch (edad >= 18) {
  case true:
    console.log("mayor");
    break;
  case false:
    console.log("menor");
}

let elegir = "sumar";

switch (elegir) {
  case "sumar":
    console.log("Vamos a sumar");
    break;
  case "restar":
    console.log("Vamos a restar");
    break;
  case "dividir":
    console.log("Vamos a dividir");
    break;
  case "multiplicar":
    console.log("Vamos a multiplicar");
}



if (elegir === "sumar") {

  console.log("vamos a sumar");

} else if (evaluar == "restar") {

  console.log("vamos a restar");

} else if (evaluar == "multiplicar") { 

  console.log("vamos a multiplicar");

} else if (evaluar == "dividir") {

  console.log("vamos a dividir");
}

