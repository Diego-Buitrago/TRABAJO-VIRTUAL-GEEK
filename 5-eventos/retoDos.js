'use strict';

const inputEl = document.querySelector('.nombre');
const button = document.querySelector('.button');

const showAlert = () => console.log("Hola " + inputEl.value);

button.addEventListener('click', showAlert);