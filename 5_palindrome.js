//check the number is palidrome or not. 

string = "racecar";

//we can apply same reverse string logic

reverse = "";

length = string.length;

for (i = length; i > 0; i--) {
    reverse += string[i - 1];
}

console.log(reverse);

if (string == reverse) {
    console.log("The string " + string + " is a PALINDROME");
}
else {
    console.log("The string " + string + " is NOT a PALINDROME");
}

