// Array Carousel

// Variables
// Creare un array di immagini

const pics = ['img/01.webp' , 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp'];
const slideshow = document.getElementById('carousel');

console.log(pics , slideshow);

// Creare i div all'interno del file HTML tramite Js
// Ciclo
for (let i = 0; i < pics.length; i++) {

    if (i == 0) {
        
        slideshow.innerHTML += `<div class="pic active"><img src="${pics[i]}"></div>`;
        
    } else {
        slideshow.innerHTML += `<div class="pic"><img src="${pics[i]}"></div>`;
    }
    
}

console.log(pics , slideshow);

const arrayPics = document.getElementsByClassName('pic');

let activeItem = 0;


const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

console.log(arrayPics, nextButton, prevButton);

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
                    
                } if (activeItem == 0) {

                    prevButton.classList.add('hidden');

                } else if (activeItem > 0) {

                    prevButton.classList.remove('hidden');

                }

        }

    }

);

prevButton.addEventListener('click' , 
    
    function(){

        if (activeItem > 0) {

            prevButton.classList.remove('hidden');

            arrayPics[activeItem].classList.remove('active');

            // Decremento
            activeItem--;

            arrayPics[activeItem].classList.add('active');

            if (activeItem == 0) {

                prevButton.classList.add('hidden');

            } if (activeItem < arrayPics.length - 1) {

                nextButton.classList.remove('hidden');

            }
        }

    }

);

// console.log(activeItem);
