//check the number is palidrome or not. 
"use strict";
const string = "racecar";
let i;

if (typeof string === "string") {
    Palindrome(string);
}
else {
    console.log("String value is only accepted here!");
    console.log("Please enter a string");
}

function Palindrome(string) {
    let reverse = "";
    let length = string.length;

    for (i = length; i > 0; i--) {
        reverse += string[i - 1];
    }

    console.log(reverse);

    if (string == reverse) {
        console.log("The string " + string + " is a PALINDROME");
    }
    else {
        console.log("The string " + string + " is NOT a PALINDROME");
    }
}
