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
        <li class="uno">${inception}</li>
        <li class="dos">${theButterFlyEffect}</li>
        <li class="tres">${eternalSunshineOfTheSM}</li>
        <li class="cuatro">${blueVelvet}</li>
        <li class="cinco">${split}</li>`;
    return ulEl;
}

buttonEl.addEventListener('click', showAlert);

console.log(ulEl);

const clasUno = document.querySelector('.uno');
const clasDos = document.querySelector('.dos');
const clasTres = document.querySelector('.tres');
const clasCuatro = document.querySelector('.cuatro');
const clasCinco = document.querySelector('.cinco');


function handlePlusOneButton(event) {

    const liElement = event.currentTarget;

    console.log(liElement.innerHTML);
}
clasUno.addEventListener('click', handlePlusOneButton);
clasDos.addEventListener('click', handlePlusOneButton);
clasTres.addEventListener('click', handlePlusOneButton);
clasCuatro.addEventListener('click', handlePlusOneButton);
clasCinco.addEventListener('click', handlePlusOneButton);