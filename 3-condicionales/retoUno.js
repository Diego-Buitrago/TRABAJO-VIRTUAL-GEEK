'use strict';

const defecto = "http://placehold.it/300x300";

var imagen = "http://www.fillmurray.com/300/300";

const bodyEl = document.querySelector('body');

const url = imagen || defecto;

bodyEl.innerHTML = `<img src="${url}">`;