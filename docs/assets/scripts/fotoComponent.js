
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
    
   const img = document.createElement('img');
    img.src = f.url;
    div.appendChild(img);
   // const test = document.createElement('div');
    
    //div.appendChild(test);
    //console.log("d")
   });
  }


}


