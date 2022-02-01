const string = "Bennison devadoss";

let length = string.length;
console.log(length);
let reverse = "";

i = 0;
while (i < length) {
    reverse += string[(length - i) - 1];
    i++;
}

console.log(reverse); 
