// console.log(a[5].length);

// let a = [1, 2, [2, 3, 4, 5, 5, 67, 8], 3, 5, 6, [4, 65, 7, 8]];

// console.log(a[4][0]); 
// console.log(a[(4)].length);

let a = [1, 4, 2, 3, [10, 20, 20], [100, 500, 700, 600], [2000, 1000]];
let c = [];
let k = 0;

outer: for (i = 0; i < a.length; i++) {
    if (a[i].length > 1) {
        length = a[i].length;
        for (j = 0; j < length; j++) {
            c[k] = a[i][j];
            k++;
        }
        continue outer;
    }
    c[k] = a[i];
    k++;
}

a = c;
console.log(a); 
