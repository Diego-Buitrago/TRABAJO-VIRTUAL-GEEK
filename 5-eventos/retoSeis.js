'use strict';

const bodyEl = document.querySelector('.body');

window.addEventListener("keydown", function(event) {

    if (event.key === "r") {
        bodyEl.style.backgroundColor = 'red';
    } else if (event.key === "m") {
        bodyEl.style.backgroundColor = 'purple';
    }
}, false);