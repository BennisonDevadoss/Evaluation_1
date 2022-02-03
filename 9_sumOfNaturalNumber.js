// find sum of natural number
let Number = 10;
if (typeof Number === "number") {
    NaturalNumber(Number);
}
else {
    console.log("Please enter a string value!");
}

function NaturalNumber(number) {

    let sum = 0;

    for (i = 1; i <= number; i++) {
        sum = sum + i;
    }

    console.log("Sum of natural natural:", sum);
}
