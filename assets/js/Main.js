import Leon from './leon.js'
import Aguila from "./aguila.js";
import Serpiente from "./serpiente.js";
import Oso from "./oso.js";
import Lobo from "./lobo.js";



function resetForm() {
    $("#animal").prop('selectedIndex', 0);
    $("edad").prop("selectedIndex", 0);
    $("comentarios").html("");
}

$('#btnRegistrar').on('click', function(){
    const animal = $('#animal').val();
    const edad = $("#edad").val();
    const comentarios = $("#comentarios").val().trim();
    const error = [];

    if( animal == null){
        error.push('Debe seleccionar un Animal')
    }
    if (edad == null) {
        error.push("Debe seleccionar un Edad");
    }
    if (sonido == null) {
        error.push("Debe seleccionar un sonido");
    }
    else(){

    }
    console.log('probando')
})

function sonar(pos){
    
}
/*
$("#animales").append(`<div class="card" style="width: 200px;">
  <img src="${imagenAnimal}" class="card-img-top" alt="...">
  <div class="card-body">
  <button onclick="sonar(${i})"></button>
  <audio src="${sonidoanimal}"
  </div>
  </div>`)

*/
