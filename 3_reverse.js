const string = "Bennison devadoss";

function stringReverse(string) {
    let length = string.length;
    console.log(length);
    let reverse = "";
    let i = 0;

    while (i < length) {
        reverse += string[(length - i) - 1];
        i++;
    }
    console.log(reverse);
}

if (typeof string === "string") {
    stringReverse(string);
}
else {
    console.log("Please enter a string value")
}
