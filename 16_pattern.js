let i, j;
let pattern = "";
let number = 5; 

for (i = 0; i < number; i++) {
    for (j = 0; j <= i; j++) {

        pattern += "*";
    }
    pattern += "\n"
}

console.log(pattern); 
