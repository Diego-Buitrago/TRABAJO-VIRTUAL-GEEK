'use strict';

const parrafo = document.querySelector('.parrafo');
const button = document.querySelector('.alert');

const showAlert = () => parrafo.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";

button.addEventListener('click', showAlert);