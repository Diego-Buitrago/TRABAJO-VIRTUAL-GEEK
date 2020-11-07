'use strict';

const contador = {
    valorMaximo: 100,
    valorMinimo: 0,
    valorActual: 0,
    valorInicial: 0
}

contador.aumentar = (run) => contador.valorActual = contador.valorActual + run;
contador.disminuir = (dis) => contador.valorActual = contador.valorActual - dis;
contador.restableser = (res) => contador.valorActual = res;

contador.aumentar(10);
console.log(contador.valorActual);
contador.disminuir(2);
console.log(contador.valorActual);
contador.restableser(0);
console.log(contador.valorActual);