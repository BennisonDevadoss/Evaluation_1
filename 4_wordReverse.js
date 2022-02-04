"use strict";

let string = " Hi Hello How Are You ";
// console.log(string.split(" ").reverse().join(" "));
let i;

if (typeof string != "string") {
    console.log("...........WARNING!...........");
    console.log("String value is only accepted!")
}
else {
    WordReverse(string);
}

function WordReverse(string) {

    let length = string.length;
    //.................................
    //word count
    let word = 0;
    for (i = 0; i <= length; i++) {
        if (string[i] == " ") {
            word = word + 1;
        }
    }
    word = word + 1;
    //.................................

    let diff = 0;
    let reverse = "";
    let count = 0;

    //.................................

    for (let k = 1; k < word; k++) {
        length = (length - count);
        i = length;
        count = 0;

        while (string[i - 1] != " ") {
            count = count + 1;
            i--;

        }

        count = count + 1;
        diff = (length - count);
        let j = 0;

        while (j < count) {
            reverse += string[diff + j]
            j++;
        }
    }

    reverse = reverse + " ";
    i = 0;
    while (string[i] != " ") {
        reverse += string[i];
        i++;
    }

    //..............................

    console.log(reverse);
}

