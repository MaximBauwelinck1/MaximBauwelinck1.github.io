
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
    const d = document.createElement('div');
   const nieuwediv = document.createElement('img');
    nieuwediv.src = f.url;
    d.appendChild(nieuwediv);
    div.appendChild(d);
   // const test = document.createElement('div');
    
    //div.appendChild(test);
    //console.log("d")
   });
  }


}


