'use strict';

const movieUno = document.querySelector('.movieUno');
const movieDos = document.querySelector('.movieDos');
const buttonEl = document.querySelector('.button');

const movies = [];

function showAlert() {
    movies[0] = movieUno.value;
    movies[1] = movieDos.value;

    for (const movie of movies) {
        console.log(`A mí también me encantó ${movie} Tenemos mucho en común, humana.`)
    }
}

buttonEl.addEventListener('click', showAlert);