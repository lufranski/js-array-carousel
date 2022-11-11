// Array Carousel

// Variables
// Creare un array di immagini

const pics = ['img/01.webp' , 'img/02.webp' , 'img/03.webp' , 'img/04.webp' , 'img/05.webp'];
const slideshow = document.getElementById('carousel');
const nextButton = document.querySelector('.navbutton');
const prevButton = document.querySelector('#carousel div:last-child');

console.log(pics , slideshow , nextButton , prevButton);

// Creare i div all'interno del file HTML tramite Js
// Ciclo
for (let i = 0; i < pics.length; i++) {

    slideshow.innerHTML += `<div class="pic"><img src="${pics[i]}"></div>`;

    if (i == 0) {

        const firstPic = document.querySelector('.pic');

        firstPic.classList.add('active');

    }

    nextButton.addEventListener('click' ,

         function(){

            firstPic.classList.remove('active');

        }

    );

}

console.log(slideshow);

// Ciclo for per far sì che al click le immagini cambino classe e quindi display state