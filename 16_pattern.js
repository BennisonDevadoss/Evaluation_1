"use strict";

let i, j;
let pattern = "";
let number = 5;

for (i = 1; i <= number; i++) {
    for (j = 1; j <= i; j++) {

        pattern += "*" + " ";
    }

    if (i < number)
        pattern += "\n";
}

console.log(pattern); 

