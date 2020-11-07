'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const buttonEl = document.querySelector('.button2');

const ulEl = document.querySelector('ul');

function showAlert() {

    ulEl.innerHTML = `
    <li>${inception}</li>
    <li>${theButterFlyEffect}</li>
    <li>${eternalSunshineOfTheSM}</li>
    <li>${blueVelvet}</li>
    <li>${split}</li>`;

    return ulEl;
}

const liEl = ulEl.querySelectorAll('li');


function liAlert(event) {

    const liclick = event.currentTarget;

    liclick.innerHTML = console.log(liclick.innerHTML);
}
buttonEl.addEventListener('click', showAlert);

ulEl.addEventListener('click', liAlert);