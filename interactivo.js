const formulario=document.getElementById("formulario");

const resultado=document.getElementById("resultado");

const nombre=document.getElementById("nombre");

const nombreResultado=document.getElementById("nombre-resultado");

const flecha=document.getElementById("flecha");

const termometro=document.querySelector(".termometro");

const puntaje=document.getElementById("puntaje");

const mensaje=document.getElementById("mensaje");

formulario.addEventListener("submit",function(e){

e.preventDefault();

let total=0;

for(let i=1;i<=5;i++){

let respuesta=document.querySelector('input[name="p'+i+'"]:checked');

total+=Number(respuesta.value);

}

puntaje.innerHTML="Puntaje: "+total+" / 25";

nombreResultado.innerHTML="Resultado de: "+nombre.value.trim();

resultado.hidden=false;

if(total<=5){

mensaje.innerHTML="Veo que casi nunca usas IA, en este curso vamos a ver varias herramientas para que puedas sacar el mayor provecho de estas herramientas.";

}

else if(total<=10){

mensaje.innerHTML="Veo que usas IA muy de vez en cuando, en este curso vamos a ver varias herramientas para que puedas sacar el mayor provecho de estas herramientas.";

}

else if(total<=15){

mensaje.innerHTML="Tienes un nivel medio de uso de IA, en este curso vamos a ver varias herramientas para que puedas sacar el mayor provecho de estas herramientas.";

}

else if(total<=20){

mensaje.innerHTML="Tienes un nivel alto de uso de IA, recuerda que la IA es una herramienta que puede ayudarte a ser más productivo, pero no debes depender de ella para todo. No olvides leer y comparar para evitar errores.";

}

else{

mensaje.innerHTML="Actualmente estás usando mucha IA, debes ser una persona muy productiva. No olvides que a veces hay errores en las predicciones, recuerda siempre leer y comparar para evitar errores.";

}

// Porcentajes de las marcas 25 (arriba) y 1 (abajo) dentro de la imagen.
// Así la flecha conserva su alineación aunque cambie el tamaño del termómetro.
const marcaSuperior=8.05;
const separacionEntreMarcas=(80.4-8.05)/24;
const posicionFlecha=marcaSuperior+(25-total)*separacionEntreMarcas;

termometro.style.setProperty("--posicion-flecha",posicionFlecha+"%");

resultado.scrollIntoView({behavior:"smooth",block:"center"});

});
