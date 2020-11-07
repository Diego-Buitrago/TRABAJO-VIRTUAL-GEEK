'use strict';

const h1El = document.querySelector('h1');
const selecttEl = document.querySelector('select');
const feliz = document.querySelector('.feliz');
const triste = document.querySelector('.triste');
const buttonEl = document.querySelector('.update');
const divEl = document.querySelector('div');
console.log(divEl);

function Alert() {

    const numRandom = Math.random() * (100 - 0) + 0;
    const number = parseInt(numRandom);


    if (selecttEl.value === "1") {
        h1El.innerHTML = feliz.innerHTML;
    } else if (selecttEl.value === "2") {
        h1El.innerHTML = triste.innerHTML;
    }

    if (number % 2 === 0) {
        divEl.classList.add('amarillo');
    } else {
        divEl.classList.add('naranja');
    }

}

buttonEl.addEventListener('click', Alert);