// Array.forEach
"use strict";
let names = ["Bennison", "Devadoss", "Gibson", "Joseph"];

let fun = function (value, index) {
    console.log(value, index);
}

names.forEach(fun);

//..........................................
// Array.map

let func = function (element) {
    return element = element + 1;
}

let array = [1, 2, 3, 4, 5];

let newArray = array.map(func);

console.log(array);
console.log(newArray);
