let a = "abcdem fghij";
let reverse = "";
let reverse1 = "";
for (let i = 1; i <= a.length; i++) {
    b = a[a.length - i];
    for (reverse of b) {
        reverse1 += reverse;
    }
}
console.log(reverse1); 
