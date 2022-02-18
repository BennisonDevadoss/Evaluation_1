let string = "Hi Hello How Are You"
let reverse = "";
let reverse1 = "";
let reverse2 = "";
let index, index1;
let rev = " ";
for (let i = 1; i <= string.length; i++) {
    index = string[string.length - i]
    reverse = reverse + index;

    if (index === " ") {

        for (j = 1; j <= reverse.length; j++) {
            index1 = reverse[reverse.length - j]

            reverse1 = reverse1 + index1;

        }
        reverse2 = reverse2 + reverse1;
        reverse = "";
        reverse1 = "";
    }

}
for (i = 0; i < string.length; i++) {
    rev += string[i];
    if (string[i] === " ") {
        break;
    }
}
reverse2 = reverse2 + rev;
console.log(reverse2); 