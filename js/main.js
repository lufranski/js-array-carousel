// Array Carousel

// Variables
const pics = [];
const slideshow = document.getElementById('carousel');

console.log(pics , slideshow);

// Creare un array di immagini
pics.push('img/01.webp');
pics.push('img/02.webp');
pics.push('img/03.webp');
pics.push('img/04.webp');
pics.push('img/05.webp');

console.log(pics);

// Creare i div all'interno del file HTML tramite Js
// Ciclo
for (i = 0; i < 5; i++) {

    slideshow.innerHTML = `<div class="pic"><img></div>`;

    

}

console.log(slideshow);

// Ciclo for per far sì che al click le immagini cambino classe e quindi display state