export default class foto {
    #naam;
    #url;
    
    constructor(naam,url) {
     this.#naam = naam;
     this.#url = url;
    }
  
    get naam() {
      return this.#naam;
    }
    get url() {
      return this.#url;
    }
   
  }
  