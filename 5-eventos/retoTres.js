'use strict';

const element = document.createElement('p');
document.body.appendChild(element);
const p1El = document.querySelector('.p1');

const showAlert = () => element.innerHTML = "nuevo lorem ipsum";

p1El.addEventListener('mouseover', showAlert);