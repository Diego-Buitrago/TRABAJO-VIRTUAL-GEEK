'use strict';

const bill = 128;
const persons = 9;

const result = (bill - 2) / persons;

const billAna = result + 2;

console.log(`Cada persona debe pagar: ${result}€`);
console.log(`Ana debe pagar: ${billAna}€`);