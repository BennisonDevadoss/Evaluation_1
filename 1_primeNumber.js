"use strict";
function prime(number) {

    if (typeof number === "string") {
        console.log("string value is not accepted.");
    }

    else {

        if (number === 1 || number === 2) {
            console.log("Number " + number + " is NOT a PRIME number");
        }
        console.log("dfka");

        for (let i = 2; i < number; i++) {
            console.log("jf");
            if (number % i === 0) {
                console.log("Number " + number + " is NOT a PRIME number");
                break;
            }

            if (i === number - 1) {

                if (number % number - 1 != 0) {
                    console.log("Number " + number + " is a PRIME number");
                    break;
                }

            }

        }
    }

}

prime("Bennison");
// prime(2.);
// prime(3);
// prime(4);
// prime(10);
// prime(11);
// prime(111);
// prime(113);
// prime(true); 
// prime(2.5); 
