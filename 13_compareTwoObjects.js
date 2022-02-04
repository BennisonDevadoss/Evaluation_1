"use strict";

let a = { id: 1, name: "edison" };
let b = { id: 1, name: "edison" };

let c = { id: 1, name: "edison" };
let d = { id: 2, name: "edison" };

function compare(objectA, objectB) {
    return objectA.id === objectB.id && objectA.name === objectB.name;
}

console.log(compare(a, b));
console.log(compare(c, d)); 