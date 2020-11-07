'use strict';

const geekGirl1 = {
    name: 'Susana',
    edad: 34,
    ocupacion: 'periodista'
}

geekGirl1.run = (dato) => `estoy ${dato}`

console.log(geekGirl1.run('corriendo'));

geekGirl1.runAMarathon = (distance) => `Estoy corriendo una maratón de ${distance} kilometros`;

console.log(geekGirl1.runAMarathon(50));