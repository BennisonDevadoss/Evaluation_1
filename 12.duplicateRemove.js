let array = [{ id: 1, name: "Stephen covey" }, { id: 2, name: "Robin Sharma" }, { id: 3, name: "Tolstoy" }, { id: 3, name: "Tolstoy" }, { id: 5, name: "James clear" }];

length = array.length;

// console.log(length);

// console.log(array[0].id)
let k = -1;

let newArray = [];
let i;

for (i = 0; i < length; i++) {

    if (i > 0) {
        if (array[i].id === newArray[k].id) {
            continue;
        }
    }

    // console.log(k);
    k = k + 1;

    newArray[k] = array[i];
    // console.log(newArray[k]);
    // console.log(k);
    // console.log(newArray);

}
// console.log(newArray)
array = newArray;

console.log(array);

// console.log(array); 

