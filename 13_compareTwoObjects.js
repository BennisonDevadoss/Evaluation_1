let a = { id: 1, name: "edison" };
let b = { id: 1, name: "edison" };

let c = { id: 1, name: "edison" };
let d = { id: 2, name: "edison" };


function compair(objectA, objectB) {

    console.log(objectA.id === objectB.id && objectA.name === objectB.name);


}




compair(a, b);
compair(c, d); 