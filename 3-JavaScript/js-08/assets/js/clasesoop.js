/* class persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
 }

  get nombre(){
    return this.nombre;
    }
    set nombre(){
    this._nombre = nombre;
    }

}

let persona1 = new persona("Jose", "Lopez");
console.log(persona1);

persona1.nombre = 'hugo sanchez';
console.log(persona1.nombre);

let persona2 = new persona("Ana", "Cruz");

console.log(persona2);


 */


class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre
    }
}

let persona1 = new Persona('David','Castellanos');

console.log(persona1);

persona1.nombre = 'David Guzman'

console.log(persona1.nombre);

let persona2 = new Persona ('Arturo', 'Guzman');
console.log(persona2);
