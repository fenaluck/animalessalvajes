import Animal from "./animales.js";

export default class Lobo extends Animal {
    constructor(nombre, edad, comentarios) {
        super(
        nombre,
        edad,
        "assets/imgs/Lobo.jpg",
        comentarios,
        "assets/sounds/Aullido.mp3"
        );
    }
    rugir() {
        const player = document.getElementByid("player");
        player.innerHTML = `< source src="${this._sonido}" type="audio/mpeg">`;

        player.play();
    }
}
