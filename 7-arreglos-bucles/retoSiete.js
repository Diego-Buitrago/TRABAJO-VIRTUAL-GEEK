'use strict';

const geekGirl = [{
            name: "María",
            edad: 29,
            estudio: "diseñadora"
        },
        {
            name: "Lucía",
            edad: 31,
            estudio: "ingeniera química"
        },
        {
            name: "Susana",
            edad: 34,
            estudio: "periodista"
        },
        {
            name: "Rocío",
            edad: 25,
            estudio: "actriz"
        },
        {
            name: "Inmaculada",
            edad: 21,
            estudio: "diseñadora"
        }
    ]
    // devuelve el número de geek girls en el listado.
function countGeekGirls(array) {
    return array.length;
}

// devuelve la media de edad de listado.
function averageAge(array) {
    let years = 0;

    for (let i = 0; i < array.length; i++) {
        years += array[i].edad;
    }
    return years / array.length;
}

// devuelve el nombre de la geek girl más joven.
function theYoungest(array) {

    let assistant = 100;
    let name = "";

    for (let i = 0; i < array.length; i++) {

        for (let j = 1; j < array.length; j++) {

            if (array[i].edad < array[j].edad && array[i].edad < assistant) {
                assistant = array[i].edad;
                name = array[i].name
            }
        }
    }

    return name;
}

// devuelve el número de geek girls que son diseñadoras.
function countDesigners(array) {

    const name = "diseñadora";
    const numbers = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i].estudio === name) {
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(countGeekGirls(geekGirl));
console.log(averageAge(geekGirl));
console.log(theYoungest(geekGirl));
console.log(countDesigners(geekGirl));