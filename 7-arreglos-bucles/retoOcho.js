'use strict';

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false }
];

const ulEl = document.querySelector('ul');

for (let i = 0; i < tasks.length; i++) {


    if (tasks[i].completed === true) {
        ulEl.innerHTML += `<li class="${tasks[i].completed}" >${tasks[i].name}</li><input type="checkbox" checked >Completado</input>`
    } else {
        ulEl.innerHTML += `<li class="${tasks[i].completed}" >${tasks[i].name}</li><input type="checkbox">Completado</input>`
    }

}

const isChecked = ulEl.querySelectorAll('input');