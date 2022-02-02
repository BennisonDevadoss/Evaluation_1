let a = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5];

let b = [];

for (i = 0; i < a.length; i++) {
    const value = a[i];
    console.log('value', value)
    if (!b.includes(value)) {
        console.log('called if', b)
        b.push(value)
    }
}

console.log(b)



