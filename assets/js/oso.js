import Animal from "./animales.js";

export default class Oso extends Animal {
  constructor(nombre, edad, comentarios){
    super(nombre, edad, 'assets/imgs/Oso.jpg', comentarios, 'assets/sounds/Gruñido.mp3')
  }
  gruñir() {
    const player = document.getElementByid('player')
    player.innerHTML=`< source src="${this._sonido}" type="audio/mpeg">`
    player.play()
  }
}
