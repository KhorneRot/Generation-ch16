// gerElementById()

console.log(document.getElementById("parrafo1").textContent);

const parrafo1 = document.getElementById("parrafo1");

console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el parrafo 1";

console.log(parrafo1.style);

parrafo1.style.color = "red";
parrafo1.style.backgroundColor = "yellow";

// queriSelector()
// etiqueta = p
// clase = .parrafo
// id = #parrafo1

const parrafo2 = document.querySelector(".parrafo");

console.log(parrafo2.textContent);

parrafo2.textContent += "\n Modificando el contenido desde JavaScript";

// querySelectorALL / lista de nodos - nodelist

const parrafos = document.querySelectorAll("P");

console.log(parrafos);

parrafos[2].style.fontSize = "2rem";

// css - font-size

// js - fontSize

// modificar los atributos de html

const enlace = document.getElementById("enlace");

enlace.href = "https://www.youtube.com/";
enlace.target = "_blank";
enlace.textContent = "Enlace de youtube";

console.log(enlace.href);

// reemplazar contenido
const parrafo4 = document.getElementById("parrafo4");

console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
console.log(document.body.innerHTML); // muestra el html que haya en el interior de el elemento

console.log(parrafo4.outerHTML); //muestra el contenido html, incluyendo al elemento

// parrafo4.innerHTML = '<a href= "https://www.google.com/"></a>';

// parrafo4.outerHTML = '<div class="elemento">Este es un div</div>'

// JS permite modificar las clases css
// utilizando style
// utilizando classlist
console.log(parrafo4.classList.contains("elemento"));

const cambiarColor = () => {
  parrafo4.classList.toggle("elemento");
};

cambiarColor(); //se agrega la clase
cambiarColor(); //se quita la clase
