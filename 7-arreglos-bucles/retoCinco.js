'use strict';

const numbers = [10, 1, 9, 12, 2];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
}

console.log(`la media de los numeros del array es: ${acc / numbers.length}`);

numbers[5] = 32;


let numAcc = 0;

for (let i = 0; i < numbers.length; i++) {
    numAcc += numbers[i];
}

console.log(`la media de los numeros del array es: ${numAcc / numbers.length}`);

function average(array) {
    let accNum = 0;

    for (let i = 0; i < array.length; i++) {
        accNum += array[i];
    }
    return accNum / array.length;
}

const numArray = [15, 4, 6, 50, 2];
const lisNumbers = [1, 12, 14, 21, 45, 10];

console.log(`la medias es: ${average(numbers)}`);
console.log(`la medias es: ${average(numArray)}`);
console.log(`la medias es: ${average(lisNumbers)}`);