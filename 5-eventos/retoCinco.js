'use strict';

const israEl = document.querySelector('.teacher--isra');
const barlosEl = document.querySelector('.teacher--tuerto');
const nasiEl = document.querySelector('.teacher--nasi');

function handlePlusOneButton(event) {
    // Recogemos el elemento sobre el que pusimos el listener
    // y lo asignamos a una constante
    const buttonElement = event.currentTarget;

    buttonElement.classList.toggle('teacher--selected');

}
israEl.addEventListener('click', handlePlusOneButton);
barlosEl.addEventListener('click', handlePlusOneButton);
nasiEl.addEventListener('click', handlePlusOneButton);