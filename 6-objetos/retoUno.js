'use strict';

const geekGirl1 = {
    name: 'Susana',
    edad: 34,
    ocupacion: 'periodista'
}

const geekGirl2 = {
    name: 'Rocio',
    edad: 26,
    ocupacion: 'actriz'
}
const susana = document.querySelector('.susana');
const rocio = document.querySelector('.rocio');

susana.innerHTML = `Mi nombre es ${geekGirl1.name}, tengo ${geekGirl1.edad} años y soy ${geekGirl1.ocupacion}`
rocio.innerHTML = `Hola soy ${geekGirl2.name}, tengo ${geekGirl2.edad} años mi profeccion es ${geekGirl2.ocupacion}`