import Animal from "./animales.js";

export default class Aguila extends Animal {
  constructor(nombre, edad, comentarios) {
    super(
      nombre,
      edad,
      "assets/imgs/Aguila.png",
      comentarios,
      "assets/sounds/Chillido.mp3"
    );
  }
  chillar() {
    const player = document.getElementByid("player");
    player.innerHTML = `< source src="${this._sonido}" type="audio/mpeg">`;

    player.play();
  }
}
