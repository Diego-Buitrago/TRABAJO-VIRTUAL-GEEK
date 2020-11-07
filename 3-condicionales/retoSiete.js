'use strict';

let year = 15;

while (true) {
    if (year % 4 === 0) {
        console.log(`El siguiente año bifiesto es ${year}`)
        break;
    } else {
        year++;
    }
}