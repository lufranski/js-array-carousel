// Array Carousel

// Variables
// Creare un array di immagini

const pics = ['img/01.webp' , 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp'];
const slideshow = document.getElementById('carousel');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const firstPic = document.querySelector('.pic');

console.log(pics , slideshow , nextButton, prevButton);

// Creare i div all'interno del file HTML tramite Js
// Ciclo
for (let i = 0; i < pics.length; i++) {

    if (i == 0) {

        slideshow.innerHTML += `<div class="pic active"><img src="${pics[i]}"></div>`;
        
    } else {
        slideshow.innerHTML += `<div class="pic"><img src="${pics[i]}"></div>`;
    }

    
    
}

const arrayPics = document.getElementsByClassName('pic');

let activeItem = 0;

console.log(arrayPics);

nextButton.addEventListener('click' ,

     function(){

        // Condizioni
        if(activeItem < arrayPics.length - 1) {
            
            // Tolgo la classe active all'elemento attuale
            arrayPics[activeItem].classList.remove('active');

            // Incremento
            activeItem++;

            // Aggiungo la classe active all'elemento successivo
            arrayPics[activeItem].classList.add('active');

            if (activeItem === arrayPics.length - 1) {

                nextButton.classList.add('hidden');

            }

        }

    }

);
// console.log(slideshow);

// Ciclo for per far sì che al click le immagini cambino classe e quindi display state