'use strict';

const altura = 10;

const arbol = [
    "         ★",
    "         ▲",
    "        ▲▲▲▲",
    "       ▲▲▲▲▲▲",
    "      ▲▲▲▲▲▲▲▲",
    "     ▲▲▲▲▲▲▲▲▲▲",
    "    ▲▲▲▲▲▲▲▲▲▲▲▲",
    "   ▲▲▲▲▲▲▲▲▲▲▲▲▲▲",
    "  ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲",
    " ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲",
    "▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲",
    "          |"
]

for (let i = 0; i <= altura; i++) {
    console.log(arbol[i]);

    if (i === altura) {
        console.log(arbol[11]);
    }
}