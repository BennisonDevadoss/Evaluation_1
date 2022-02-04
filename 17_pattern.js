"use strict";

let i, j;
let pattern = "";
let k = 0;
let number = 5;
for (i = 1; i < number; i++) {
    for (j = 1; j <= i; j++) {
        k++;
        pattern += k + " ";
    }

    pattern += "\n";

}

console.log(pattern); 