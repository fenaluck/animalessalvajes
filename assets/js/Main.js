//Primero importamos las clases
import Leon from './leon.js'
import Aguila from "./aguila.js";
import Serpiente from "./serpiente.js";
import Oso from "./oso.js";
import Lobo from "./lobo.js";

(async function () {
    let datos = await fetch("data/animales.json")
    datos = await datos.json();
    let animales = datos.animales
    
    $("#animal").on('change', function(){
        const nombre_animal = $("#animal").val()
        const animal = animales.find(ani => ani.name == nombre_animal)
               
        $('#preview').css('background-image', `url("assets/imgs/${animal.imagen}")`)

    })
    
})();
// IIFE (funciones Inmediatamente Ejecutadas)



// segundo obtenemos el valor del formulario

const animalsalvaje=[]

$("#btnRegistrar").on('click', function(){
    //cuarto creamos las variablles para almacenar la informacion
    const animal = $('#animal').val();
    const edad = $("#edad").val();
    const comentarios = $("#comentarios").val().trim();
    const error = [];
    //creamos las condiciones en caso de errores
    if (animal == ""){
        error.push('Debe seleccionar un Animal')
    }
    if (edad == "") {
        error.push("Debe seleccionar un Edad");
    }
    if (comentarios == "") {
        error.push("Por favor escriba su comentario");
    }
    if(error.length > 0) {
        alert(error)
        return
    }

    //creamos un nuevo animal
    //primero creamos la variable que almacene el nuevo animal
    let nuevoanimal;
    //segundo creamos la condicion para crear el nuevo animal
    if (animal == "Leon") {
        nuevoanimal= new Leon(animal, edad, comentarios)
    }else if(animal == "Lobo") {
        nuevoanimal= new Lobo(animal, edad, comentarios)
    }else if(animal == "Oso") {
        nuevoanimal= new Oso(animal, edad, comentarios)
    }else if(animal == "Aguila") {
        nuevoanimal= new Aguila(animal, edad, comentarios)
    }else if(animal == "Serpiente") {
        nuevoanimal= new Serpiente(animal, edad, comentarios)
    }
    //tercero enviamos la informacion a la variable
    animalsalvaje.push(nuevoanimal);
    //cuarto se llama a la funcion para reproducir el animal
    
    playanimal()
})

 //creanos los parametro de la funcion y sus variables
function playanimal(){
  $("#Animales").html("")
   let animal=""

    for (animal of animalsalvaje){

    $("#Animales").append(
    `<div class="container card col-3 p-1" style="width: 18rem;">
        <img src="${animal.img}" class="card-img-top" style="width:14rem;">
        <div class="card-body">
        <audio controls style ="width:10rem;">
         <source src="${animal.sonido}" type="audio/mpeg">
            </audio>
         </div>
        </div>`
        )
    }
}
