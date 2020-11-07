'use strict';

function calculadorCaja(borderBox, ancho, padding, borde) {
    if (borderBox) {
        return ancho - (borde + borde + padding + padding);
    } else {
        return borde + padding + ancho + padding + borde;
    }
}

console.log(calculadorCaja(false, 100, 16, 2));