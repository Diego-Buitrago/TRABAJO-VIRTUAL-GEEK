'use strict';

const divEl = document.querySelector('div');
const h2El = document.querySelector('h2');
const h4El = document.querySelector('h4');

if (divEl.classList.contains('warning')) {
    h2El.innerHTML = "AVISO";
    h4El.innerHTML = "Tenga cuidado";
} else if (divEl.classList.contains('error')) {
    h2El.innerHTML = "ERROR";
    h4El.innerHTML = "Ha surgido un error";
} else if (divEl.classList.contains('success')) {
    h2El.innerHTML = "CORRECTO";
    h4El.innerHTML = "Los datos son correctos";
}