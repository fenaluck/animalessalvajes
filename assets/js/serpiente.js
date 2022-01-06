import Animal from "./animales.js";


export default class Serpiente extends Animal {
    constructor(nombre, edad, comentarios) {
        super(
        nombre,
        edad,
        "assets/imgs/Serpiente.jpg",
        comentarios,
        "assets/sounds/Siseo.mp3"
        );
    }
    sisear() {
        const player = document.getElementByid("player");
        player.innerHTML = `< source src="${this._sonido}" type="audio/mpeg">`;

        player.play();
    }
    }
