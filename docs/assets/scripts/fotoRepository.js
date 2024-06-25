import foto from './foto.js';

export default class fotoRepository {
  #fotos = [];
  constructor() {
    this.fotosVullen();
  }

  get fotos() {
    return this.#fotos;
  }

  voegFotoToe(naam,url) {
    this.#fotos.push(new foto(naam,url));
  }

  fotosVullen() {
    for (let index = 1; index < 31; index++) {
          
        this.#fotos.push(new foto(`motorsport${index}`,`../fotos/motorsport${index}.jpg`));
    }
  }


}
