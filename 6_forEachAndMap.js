// Array.forEach

// the for each method will execute a function for every item in the array. 


// each iteration step receives 3 arguments value, index, object


// can be pass the function directly into the forEach method.

let names = ["Bennison", "Devadoss", "Gibson", "Joseph"];


let fun = function (value, index, objects) {
    console.log(index);
}

names.forEach(fun);


// Array.map

//Through the map method we can do any operation on any array 
// but the modification will be stroed in another array 
// For example

let fun = function (element) {
    return element.toUpperCase();
}

let array = ["bennison", "devadoss", "gibson", "joseph"];

let newArray = array.map(fun);

console.log(newArray);


// The original array is still unchanged
