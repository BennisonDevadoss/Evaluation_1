// sum of even and sum of Odd
let i;

let even, odd;

even = odd = 0;
function find(a, b) {


    console.log("Even Numbers:");
    while (a <= b) {
        if (a % 2 != 0) {

            odd = odd + 1;

        }
        else {
            even = even + 1;
        }

        a++;
    }

    console.log("Even numbers ", even);
    console.log("Odd numbers ", odd);
}


find(1, 100);


