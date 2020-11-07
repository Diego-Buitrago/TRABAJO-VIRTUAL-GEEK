'use strict';

const geekGirl1 = {
    name: 'Susana',
    edad: 34,
    ocupacion: 'periodista'
}

geekGirl1.showBio = function() {
    return `Mi nombre es ${this.name}, tengo ${this.edad} y soy ${this.ocupacion}`
}

alert(geekGirl1.showBio());

const geekGirl2 = {
    name: 'Rocio',
    edad: 26,
    ocupacion: 'actriz'
}

geekGirl2.showBio = function() {
    return `Mi nombre es ${this.name}, tengo ${this.edad} y soy ${this.ocupacion}`
}

alert(geekGirl2.showBio());