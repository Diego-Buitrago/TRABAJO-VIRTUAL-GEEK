'use strict';

function iva(num) {
    const iva = num * 21 / 100;
    return `Precio sin IVA: ${num}, IVA: ${iva} y Total: ${num + iva}`;
}

console.log(iva(10));