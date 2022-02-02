// console.log()
console.log("I am Bennison Devadoss");

//console.dir()
let a = { a: 1, a: 2, c: 3, method: {} }
console.dir(a);

// console.count()
for (let i = 0; i < 5; i++) {
    console.count("myLabel");
}

//console.table.
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
var me = new Person("John", "Smith");
console.table(me);


//console.time and console.timeEnd
console.time("time");

for (var i = 0; i < 10000; i++) {
}

console.timeEnd("time");

// console.group
console.log("hello world");
console.group();
console.log("hello Bennison");
console.log("helo gibson");
console.groupEnd()
console.log("hello world");

//console.assert


let x = 5;
let y = 5;
console.assert(x + y == 11, "Expression returned 'false'");



