function prime(number) {

    if (number === 1 || number === 2) {
        console.log("Number " + number + " is NOT a PRIME number");
    }

    for (i = 2; i < number; i++) {

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


prime(1);
prime(2);
prime(3);
prime(4);
prime(10);
prime(11);
prime(111);
prime(113);