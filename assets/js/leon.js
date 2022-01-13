import Animal from "./animales.js";

export default class Leon extends Animal {
    constructor(nombre, edad, comentarios) {
        super(
            nombre,
            edad,
            "assets/imgs/Leon.png",
            comentarios,
            "assets/sounds/Rugido.mp3"
        );
    }
    rugir() {
        const player = document.getElementByid("player");
        player.innerHTML = `< source src="${this._sonido}" type="audio/mpeg">`;
        player.play();
    }
}
