// Variable que simula los pedidos
const saludo = "Hola mundo";
const datos = [
  {
    nombre: "Alejandro",
    apellido: "Ramirez",
  },
  {
    nombre: "Alejandro",
    apellido: "Ramirez",
  },
  {
    nombre: "Alejandro",
    apellido: "Ramirez",
  },
];

// funcion para simular una peticion
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(false){
            resolve(datos);
        } else {
            reject ("No se pudo obtener datos")
        }
      
    }, 2000);
  });
}
// Forma 1
obtenerDatos().then((datos)=>{
    console.log(datos);
}).catch ((error) =>{
    console.log("Existe un error en la peticion 1");
    console.log(error);
})

//  forma 2 - funciones asincronas - await async

async function funcionAsincrona () {

    try{
        const datos = await obtenerDatos()
        console.log(datos);
        
    }catch(error){
        console.log(error);
    }

}
funcionAsincrona()



