'use string';

const buttonEl = document.querySelector('button');

function Alert(e) {
    console.log(e);
}

buttonEl.addEventListener('click', Alert);