// dimond pattern 


let pattern = "";

let i, j, k, l;

space = 5;

let temp = space;

for (i = 0; i <= 5; i++) {
    for (j = 0; j <= i; j++) {
        while (temp > 0) {
            pattern += " ";
            temp--;

        }

        pattern += "*" + " ";

    }

    pattern += "\n";
    space = space - 1;
    temp = space;

}

pattern = pattern + " ";

space = 1;
tempe = space;


for (i = 4; i >= 0; i--) {
    for (j = 0; j <= i; j++) {
        while (temp > 0) {
            pattern += " ";
            temp--;
        }

        pattern += "*" + " ";

    }
    pattern += "\n";

    space = space + 1;
    temp = space;

}

console.log(pattern);

