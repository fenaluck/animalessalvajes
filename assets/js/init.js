(async function iniciar () {
    let datos = await fetch("data/animales.json")
    datos = await datos.json();
    const animales = datos.animales
    
    $('#animal').on('change', function(){
        const nombre_animal = $('#animal').val()
        const animal = animales.find(ani => ani.name == nombre_animal)
        console.log(animal);
        
        $('#preview').css('background-image', `url("assets/imgs/${animal.imagen}")`)
    })
    
})()// IIFE (funciones Inmediatamente Ejecutadas)

