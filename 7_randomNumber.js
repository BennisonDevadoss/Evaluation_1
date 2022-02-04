"use strict";
let integer;
function randomNumber(a, b) {
    integer = Math.floor(Math.random() * (b - a) + a);
    // Math.floor(integer);
    console.log(integer);
}

let a = 1;
let b = 5;

randomNumber(a, b); 