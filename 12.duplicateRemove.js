"use strict";
let array = [{ id: 1, name: "Stephen covey" }, { id: 2, name: "Robin Sharma" }, { id: 3, name: "Tolstoy" }, { id: 3, name: "Tolstoy" }, { id: 5, name: "James clear" }, { id: 5, name: "James clear" }];

let length = array.length;
// console.log(array[0].id)
let k = -1;
let newArray = [];
let i, j;
let copy_of_k;

outer: for (i = 0; i < length; i++) {

    if (i > 0) {
        copy_of_k = k;
        for (j = 0; j <= copy_of_k; j++) {
            if (array[i].id === newArray[j].id) {
                continue outer;
            }
        }
    }
    k = k + 1;
    newArray[k] = array[i];

}

array = newArray;
console.log(array);

// let newArrayObj = array.filter(function (arr, index) {
//     return array.findIndex(function (row) { return row.id == arr.id }) === index
// })


// console.log('newArrayObj is', newArrayObj)