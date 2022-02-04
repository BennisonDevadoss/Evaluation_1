"use strict";

let a = [1, 2, 9, 3, 5, 1, 4, 5];
let b = [11, 54, 70, 40]
let i = 0;

let lengthA = a.length;
let lengthB = b.length;

while (i < lengthB) {
    a[lengthA + i] = b[i];
    i++;
}

console.log(a); 