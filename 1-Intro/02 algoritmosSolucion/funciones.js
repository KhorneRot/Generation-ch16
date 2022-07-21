// funciones

function sumar(numero1, numero2) {
  console.log("Voy a sumar");
  console.log("El resultado de la suma es: " + (numero1 + numero2));
}

sumar(4, 5);
 


// ejercicio 2 utilizando funciones 


 function calculadoraSueldo (sueldoIngresado, diasTrabajados){

    let nombre = prompt("Escribe tu nombre");
    console.log(nombre);
    
    const sueldo = sueldoIngresado;
    const diasSemana = diasTrabajados;
    const semanasMes = 4;
    
    console.log("Sueldo semanal: " + (sueldo * diasSemana));
    console.log("Sueldo mensual: " + (sueldo * diasSemana * semanasMes));
    

}

calculadoraSueldo(100,2)
calculadoraSueldo(1,6)
calculadoraSueldo(50,1)
 



// calculadora de procentaje 

// 0.6 = 60%
function calcularPorcentaje (numero, procentaje) {

  let resultado = numero * procentaje; // variable local
  console.log(resultado);

  return resultado;

}

let resultado = calcularPorcentaje(100, 0.40)
console.log(resultado);
