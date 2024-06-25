
import fotoRepository from './fotoRepository.js';

export default class fotoComponent {
  #fotoRepository;
  constructor() {
    this.#fotoRepository = new fotoRepository();

    this.#toHtml();
  }

  get fotoRepository(){
    return this.#fotoRepository;
  }
  #toHtml() {
   const div = document.getElementById("fotos");

   this.#fotoRepository.fotos.forEach(f => {
    const nieuwediv = document.createElement('img')
    nieuwediv.src = f.url;
    div.appendChild(nieuwediv);
   });
  }


}


