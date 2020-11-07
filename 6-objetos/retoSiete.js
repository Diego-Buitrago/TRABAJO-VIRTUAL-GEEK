'use strict';

const object = {};
const job = "developer";

object.firsName = 'Maritza';
object.lasName = 'Buitrago';
object.age = 22;
object.job = job;

console.log(object);

object.firsName = 'Diego';
object.age = object.age + 1;

console.log(object);