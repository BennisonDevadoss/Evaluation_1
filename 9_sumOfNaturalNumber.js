// find sum of natural number
function NaturalNumber(number) {

    let sum = 0;

    for (i = 1; i <= number; i++) {
        sum = sum + i;
    }


    console.log("Sum of natural natural:", sum);
}

NaturalNumber(10); 