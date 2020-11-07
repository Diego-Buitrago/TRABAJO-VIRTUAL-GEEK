'use strict';

const yearDog = 5;

if (yearDog === 1) {
    console.log("El perro tiene 15 años en edad humana");
} else if (yearDog === 2) {
    console.log("El perro tiene 24 años en edad humana");
} else if (yearDog >= 3) {
    const result = (yearDog - 2) * 5 + 24;
    console.log(`El perro tiene ${result} años en edad humana`);
}