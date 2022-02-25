// find sum of natural number
"use strict";

let Numbers = 10;
let i;

if (typeof Numbers === "number") {
    NaturalNumber(Number);
}
else {
    console.log("Please enter a Numberic value!");
}

function NaturalNumber(number) {

    let sum = 0;

    for (i = 1; i <= number; i++) {
        sum = sum + i;
    }

    console.log("Sum of natural natural:", sum);
}
