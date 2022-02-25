// sum of even and sum of Odd
"use strict";

let i;
let even, odd;
even = odd = 0;

function find(a, b) {
    while (a <= b) {
        if (a % 2 != 0) {
            odd = odd + a;
        }
        else {
            even = even + a;
        }
        a++;
    }
    console.log("Even numbers ", even);
    console.log("Odd numbers ", odd);
}
find(1, 100);


