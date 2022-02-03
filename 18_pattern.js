//pyramid

let i, j;
let pattern = "";
let size = 3
let k = 0;

for (i = 1; i < 5; i++) {
    for (j = 1; j < 5; j++) {
        if (j <= size) {
            pattern += pattern = " ";
        }

        else {
            pattern += ++k + " ";
        }
    }
    pattern += "\n";
    size--;
}

console.log(pattern); 