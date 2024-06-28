
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
    img.loading = "lazy"; 
    img.onclick = () =>{
      document.getElementById('lightbox-image').src = f.url;
      document.getElementById('lightbox').style.display = 'block';
    };
    div.appendChild(img);
   // const test = document.createElement('div');
    
    //div.appendChild(test);
    //console.log("d")
   });
   observeImages();
   scrollToTop();
  }


}

function openLightbox(imageUrl) {
  document.getElementById('lightbox-image').src = imageUrl;
  document.getElementById('lightbox').style.display = 'block';
}

// JavaScript to close the lightbox
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Lazy load function using Intersection Observer
function observeImages() {
  const lazyImages = document.querySelectorAll('.lazy');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
          }
      });
  });

  lazyImages.forEach(img => observer.observe(img));
  scrollToTop();
}

// Scroll to the top of the page
function scrollToTop() {
  window.scrollTo(0, 0);
}

// Initialize observer and scroll to top on page load
document.addEventListener('DOMContentLoaded', () => {
  observeImages();
  scrollToTop(); // Ensure scroll to top on initial load
});

window.addEventListener('load', scrollToTop);
window.addEventListener('beforeunload', scrollToTop); // For older browsers
