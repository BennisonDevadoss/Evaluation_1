let a = [1, 2, 9, 3, 5, 1, 4, 5];

let b = [11, 54, 70, 40]


// array merge

lengthA = a.length;
lengthB = b.length;

let i = 0;

while (i < lengthB) {
    a[lengthA + i] = b[i];
    i++;
}


console.log(a); 