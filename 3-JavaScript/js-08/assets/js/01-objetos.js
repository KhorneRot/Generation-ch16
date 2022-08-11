let x = 10;
console.log(x.length);

let persona = {
  nombre: "Alejandro",
  apellido: "Ramírez",
  correo: "ale_rm96@outlook.com",
  edad: 25,
  /* nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  }, */

  idioma: 'es',
  get leng(){
    return this.idioma.toUpperCase();
  },
  set leng(lang){
    this.idioma = lang.toLowerCase();
  }
};

console.log(persona.leng);
console.log(persona.idioma);

/* persona.tel = "5558752143"
persona.te1 = "8848762143"


console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());


// for in 

for(varPropiedad in persona){
    console.log(persona[varPropiedad]);
}

let personaString = JSON.stringify(persona);
console.log(personaString);
 */







/* console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.correo);
console.log(persona.edad);
 */
/* let persona1 = new Object();
persona1.nombre = "Jonathan";
persona1.apellido = "Ramírez";
persona1.edad = 24;
persona1.correo = "Jonathan@gmail.com"; */
/* 
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.edad);
console.log(persona1.correo);
 */
