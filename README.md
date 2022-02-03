# Evaluation_1

### 1: Prime number: 

### Algorithm: 

step 1: Start a program with function with argument. 

step 2: Inside the function first i check the number equal to one or two

step 3: if the number is one or two, I print number is not a prime number. 

step 4: If the number is greater than two, I divide the number from number three to number -1

step 5: If the remainder will be zero, I print number is a prime number.otherwise I print the number is NOT prime. 

### Psudocode: 
```
BEGIN
FUNCTION prime(number)
IF number ==== 1 || number === 2
PRINT number is not a prime
ENDIF
IF number> 2
SET i = 2
FOR i -> 2 to number
IF number MOD === 0
PRINT number is not a prime number
BREAK
ENDIF
IF i === number - 1
IF number MOD number -1 != 0
PRINT number is prime
BREAK
ENDFOR
```

### 2: Eqaual and Strict Eaual

### Algorithm

step 1: first I declare a two const variabe

step 2: I define 2 in variable name a and i difine string 2 in variable name b. 

stpe 3: I check the two variable with equality operator

stpe 4: Check the two variable with strict equality operator. 


### Psudocode
```
SET a  = 2
SET b  = "2"
a == b
PINT BOOLEAN
a === b
PRINT BOOLEAN
```


### 3: String Reverse

### Algorithm: 

step 1: Firt I declare a string variable with string value and create a empty string variable. 

step 2: Find the variable length

step 3: And i save the index backward, from last index to first index to the empty variable. 

### Psudocode: 
```
INIT string "bennison devadoss"
SET length = string.length
SET i = 0
WHILE i < length
reverse = reverse + string(length-i) -1
END WHILE
PRINT reverse. 
```

### 4: Word Reverse

### Algorithm: 

step 1: Declare a string variable and enter some variable, declare some variables named diff reverse and count 

step 2: Calculate the strling length and store that length count in another variable name length. 

step 3: Calculate, how words are in string. 

step 4: First calculate the string's last words starting index. 

step 5: Store the last word to varaible named reverse.

step 6: Then find the next last word from string. 

step 7: And finally, store variable string's first word to variable name reverse. 


### Psudocode: 
```
SET string = "hi hello how are you"
SET length = strng.lengh
INIT word = 0
FOR i -> 0 to length
  IF stfing[i] + 1
   word = word +1
  END IF
END FOR
SET diff = 0; 
SET = reverse = ""
SET = count = 0
FOR k = 1 -> word
 length = length -count
 i = count
 WHILE string[i - 1] != ""
   count = count + 1; 
   a-.
 END WHILE
 count = count + 1; 
 diff = length - count
 SET j = 0
 WHILE j < count
   reverse += string[diff - j]
   j+.
 END WHILE
END FOR
revere += reverse + " "
SET i = 0
WHILE string[i] != " "
  reverse += string[i]
  i+
END WHILE
PRINT reverse
```


### 5: Palindrome

### Algorithm: 

step 1: Declare a string variable name with value racecar

step 2: declare a empty string variable 

step 3: find the string varaible length. 

step 4: And store the string of each index from last to first to the emptry variable.

step 5: Compare the variable string and reversed string

step 6: If both are same print the string is palindrome

step 7: or else the string is not a palindrome

### Psudocode: 
```
SET string = "racecar"
SET reverse =""
SET length = string.length
FOR i = length -> 0
  revere += string[i -1]
END FOR
IF string == reverse
   PRINT string is a palindrome
ELSE 
   the string is not a palindrome
   ```
   
### 6: Array.forEach()  &  Array.map()

### Algorithm: 

Array.forEach

step 1: Declare a array variable with some string variable

step 2: Create a function, and that function takes three arguments. 

step 3: Initiailze the function to a variable. 

step 4: Finally, call the forEach method with call back function

step 5: Through the forEach method can be accessed array index, value, objects seperatly. 


### Psudocode: 
```
SET names = ["Bennison", "Devadoss"]

SET fun = FUNCTION (para1 para2 para3)
     PRINT index
ENDFUNCTION fun
```

Array.map()

### Algorithm

step 1: Declare a string array with some string values.

step 2: define a function and assign that function to a variable 

step 3: The function will convert the string to uppercase letter.

step 4: Call the array.map function with call back function. 

step 5: the changed array must be stored in aonther array.

### Psudocode: 

```
SET fun = FUNCTION (para1)
       RETURN element.toUpperCase()
ENDFUNCTION
SET array = ["bennison", "devadoss"]
SET newArray = array.map(fun)
PRINT newArray
```

### 7: Random number

### Algorithm: 

step 1: Declare a two integer with value one and five.

step 2: Create a function, and that function takes the two argument. 

step 3: Inside the function create a another variable called integer. 

step 4: Inside the function write a logic to generate a random number with the help of math.floor and math.random function.

step 5: call the function and pass the two argument to that function. 

## Psudocode:

```
INIT integer
FUNCTION randomNumber(a, b)
        integer = Math.floor(Math.random() * (b - a) + 1))
        PRINT integer
ENDFUNCTION randomNumber
SET a = 5; 
SET b = 1; 
randamNumber(a, b)
```

### 8: Array Duplicate

### Algorithm: 

step 1: Declare a array with some dupllicate integer value. 

step 2: Whithin the for loop, each index values are taken and stored in a variable.

step 3: create a empty array variable named b.

step 4: Finaly check the variable name value, if the value is not already in the array b, value is pushed to array variable b.

### Psudocode: 

```
SET a = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5]
INIT b = []
FOR i = 0 -> a.length
   SET value = a[i]
   IF !b.includes(values)
   b.push(value)
   ENDIF
ENDFOR
PRINT b
```

### 9: Sum of Natural numbers. 


### Algorithm

step 1: Create a function and pass the argument to that function.

step 2: Inside the function create avariable sum and initialize the variable to zero. 

step 3: And inside the function run the for loop from one to variable number.

step 4: when each time for loop run, sum equal to sum plus one. 

### psudoCode. 

```
FUNCTION NaturalNumber(number)
SET sum = 0
FOR i = 1 -> para1
   sum = sum + i; 
ENDFOR
PRINT sum
NaturalNumber(number)
```

### 10: Even or Odd

### Algorithm 

step 1: Take the number to the function as a parameter.

step 2: inside the function, check the parameter remainder when mod by two.

step 4: If the remainder is 0, simply print the number is even number.

step 5: If the reamainder is not zero, print the number is odd number. 

### Psudocode

```
INIT i 
SET even = add = 0
FUNCTION find(a, b)
  WHILE a <= b
     IF a MOD != 0
        odd = odd + 1
     ELSE
        even = even +1
     ENDELSEIF
  a+:
 ENDWHILE
 PRINT "even number"
 PRINT "odd number"
ENDFUNCTION
find(a, b)
```

### 11: Array Merge

### Algorithm

step 1: Create a two array variable a and b. 

step 2: And find the length of and and b. 

step 3: Add array of b to variable a. 

step 4: So add the b variable's first index begin in variable name a's last index.

### Psudocoe
```
SET a = [1, 2, 9. 3. 5. 1. 4. 5]
SET b = [11, 54, 70, 40]
SET lengthA = a.length
SET lengthB = b.length
SET i = 0
WHIHLE i < length.B
    a[lengthA + i] = b[i]
    i+:
ENDWHILE
PRINT a
```
### 12: ObjectArray Duplicate remove. 

### Algorithm

step 1: Declare a array object with some same object elements. this array name is array. 

step 2: find the length of array. 

step 3: Declare a empty array called NewArray and declare some variabale such as k, i, j, copy_of_k.

step 4: first copy the array's first index to NewArray's zero th index. 

step 5: Again i take the value from array I check the value is exist or not exist in NewArray. 

step 6: If the array not have the array's value, Then only the value will be stored in NewArray.

step 7: Finally, copy the Newarray to array. 

### Psudocode: 
```
SET array = [[{ id: 1, name: "Stephen covey" }, { id: 2, name: "Robin Sharma" }, { id: 3, name: "Tolstoy" }, { id: 3, name: "Tolstoy" }, { id: 5, name: "James clear" }];]
SET length = array.length
SET k = -1
SET newArray = []
SET i, j
SET copy_of_k
OUTER: FOR i = 0 -> length
IF i > 0
    copy_of_k = k; 
    FOR j = 0 -> copy_of_k
         IF array[i].id === newArray[j].id
             CONTUNUE OUTER
         ENDIF
    ENDFOR
ENDIF
k = k + 1
newArray[k] = array[i]
ENDFOR
array = newArray
PRINT array
```
### 13: Compare two objects

### Algorithm 

step 1: declare two objects

step 2: Pass these object to function to check the both function or same or not. 

step 3: In the funtion, the function take two objects as a parameter. 

step 4: Inside the function, two objects are compared. 

step 5: If the two objects are same the function will return true. 

step 6: If the two objects are not same the function will return false. 

### Psudocode
```
SET a = { id: 1, name: "edison" }
SET b = { id: 1, name: "edison" }
SET c = { id: 1, name: "edison" }
SET d = { id: 2, name: "edison" }
FUNCTION compare(objectA, objectB)
   return objectA.id === objectB.id && objectA.name === objectB.name
ENDFUNCTION
compare(a, b) 
compare(a, b)
```

### 14: Multidimensional array to single dimensional array.

### Algorithm 

step 1: Declate a multidimensional array, and find that array's length. 

step 2: And declare two empty array variables. 

step 3: take the multidimensional array's each index to an empty array. 

step 4: Count array's each index length, if the index have two are more than two indexes. then add that indexes each elemenets one by one to empty array.

step5: In this way, multidimensional array's each elements are stored in empty array in single dimensional formate.

step 6: Finally, copy the empty array to multidimensional array. 

### psudocode
```

SET a = [1, 4, 2, 3, [10, 20, 20], [100, 500, 700, 600],[2000, 1000]];
SET c = []
SET k = 0
outer: FOR i = 0 -> a.length
    IF (a[i].length > 1)
         length = a[i].length
         FOR j = 0 -> length
            c[k] = a[i][j]
            k+:
         ENDFOR
         CONTINUE outer
   ENDIF
    c[k] = a[i]
    k+:
ENDFOR
a = c 
PRINT a
```

### 15 Array.Reduce() method

### Algorithm 

step 1: Through the array.reduce method check the id, how many id valus are same

step 2: The output is taken as a object, so declare a reduce method in variable to take a result. 

step 3: First we declare a object variable, and some variable ids are same. how many times the ids are return should be stored in another object variable. 

step 4: through the reduce methhod, the id and that keys are taken, and check
any id values are same. if same the id will be increas one. 

step 5: Finally, the result will be stored in object a. 

### Psudocode
```
SET array = [{ id: 1, name: "edison" },{ id: 1, name: "edison" }, { id: 2, name: "Annand" }, { id: 3, name: "Vasnath" }]
SET a = array.reduce((key, value) => {
    key[value.id] = key[value.id] + 1 || 1
    RETURN key
}, {})
PRINT a
```

### 16: Printing pattern 

### Algorithm 

step 1: Declare two variable named pattern and namber. pattern is a string variable. so declare with empty string. 

step 2: And, initialize number equal to 5.

step 3: inside the for loops, when i = 0, one star will be stored in variable name pattern.

step 4: and once the oinner for loop executed outer for loop printed newline character. 

step 4: If the i equal to two, in the inner for loop two star will be stored in variable name pattern 

step 5: When the i = 5 the outer for loop condition will be failed. 

### pusdocode
```
INIT i, j
SET pattern = "";
SET number = 5; 
FOR i = 0 -> number
    FOR j = 0 -> i
        pattern += "*";
   ENDFOR
    pattern += "\n"
ENDFOR
PRINT pattern
```

### 17. Print Pattern with numbers. 

### Algorithm 

step 1: Declare two variable named pattern and namber. pattern is a string variable. so declare with empty string. 

step 2: And, initialize number equal to 5.

step 3: And used two for loop the outer for loop is used to print new line character. and at the same time the inner for loop will be used to print numbers.

step 4: first the i value is one and then the condition will go and check the inner for loop, in the inner for loop j value initialized with i. 

step 5: So the inner for loop will run i time. 

step 6: each time the inner forloop will print the numbers, when the inner for loop execute the number will be modified. 

step 7:  till the i equal to 6, the outer and inner for loop will be executed. 


### Psudocode
```
INIT i, j;
SET pattern = "";
SET k = 0;
SET number = 5;
FOR (i = 1 -> number
    FOR (j = 1 -> i
        k+:
        pattern += k + " ";
    ENDFOR
    pattern += "\n";
ENDFOR
PRINT pattern. 
```
### 18:  Print Number Pyramid pattern.

### Algorithm 

step 1: to print pyramid pattern, first add some white spaces in the variable. 

step 2: And then add first number to the variable pattern. 

step 3: We can do this with two for loops. 

step 4: First for loop used to track the pyramid length. 

step 5: And the inner for loop will used to print spaces and print numbers and stored the pattern and number into the variable pattern. 

step 6: The logic is when first time the outer for loop is executed, the inner for loop pring three white spaces. after that the number will be added in the variable pattern. 

step 7: When the outer for loop will go to five  the condition will be failed. 

step 8: Then the program execution will be stoped. 

### Psudocode
```
INIT i, j;
SET pattern = "";
SET size = 3
SET k = 0;
FOR (i = 1 -> 5
    FOR (j = 1 -> 5
        IF (j <= size) {
            pattern += pattern = " ";
        ENDIF
        ELSE 
            pattern += ++k + " ";
        ENDELSE
    ENDFOR
    pattern += "\n";
    size-:
ENDFOR
PRINT pattern. 
```

### 19: Dimond pattern in JavaScript. 

### Algorithm 

step 1: First declare empty string variable to stroed the dimond pattern design. 

step 2: And declare some variable i, j, k ,l, space. 

step 3: Make dimod pattern, in each line print some whitespaces afterthat we have to print star. 

step 4: And copy the space to the variable name temp. 

step 5: The outer for loop will be used to print the length of the dimod pattern. 

step 6: And the inner for loop will be used to print the white spaces and stars. 

step 7: Inside the inner for loop write the condition to print white space and print * in the variable pattern. 

step 8: Once the outer for loop will be executed, it will print a newline character, so next time the inner for loop print the white space and * in the new line. 

### Psudocode: 
```
SET pattern = "";
INIT i, j, k, l;
SET space = 5;
SET temp = space;
FOR i = 0 -> 5
    FOR j = 0 -> i
        WHILE temp > 0
            pattern += " "
            temp-:
        ENDWHILE
        pattern += "*" + " "
    ENDFOR
    pattern += "\n"
    space = space - 1
    temp = space
ENDFOR
pattern = pattern + " ";
space = 1;
tempe = space;
FOR i = 4; i >= 0; i--
    FOR j = 0; j <= i; j++
        WHILE temp > 0 
            pattern += " "
            temp-:
        ENDWHILE
        pattern += "*" + " "
    ENDFOR
    pattern += "\n"
    space = space + 1
    temp = space
ENDFOR
PRINTpattern
```

###   20: Console

#### 1:console.log
       
       console.log is used to print the output message in the web console.  And the message may be string, integer, float.
 
#### 2:console.dir
      
      the console.dir is used to view the objects of JavaScript. 
      
      the console.dir function views the object in hierarchical formate. 
      
      each hierarchical list have some property and methods. 
      
#### 3:console.count

     The count() method counts the number of times console.count() is called.we can use this console.count() method to track how many time a particular statement is executed. 
     
     By default it print the execution count with default string, we can modify the lable. 
     
```   
for (let i = 0; i < 5; i++) {
  console.count("myLabel");
}
```
it will display the execution count with lable name myLabel. 

#### 4:console.table()
     
      console.table print the output table formate.this method takes one argument which must be array or an objects 

```
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
var me = new Person("John", "Smith");
console.table(me);
┌───────────┬─────────┐
│  (index)  │ Values  │
├───────────┼─────────┤
│ firstName │ 'John'  │
│ lastName  │ 'Smith' │
└───────────┴─────────┘
```
#### 5:console.time and console.timeEnd
       
       console.time and console.timeEnd function is used to how long taks the particular block to execution. 
       
```
console.time("time");
for (var i = 0; i < 10000; i++) {
}
console.timeEnd("Time");
```
#### 6:console.group: 
      
     console.group create a group, with group names 

```
console.log("hello world");
console.group();
console.log("hello Bennison");
console.log("helo gibson");
console.groupEnd()
console.log("hello world");

output

hello world
  hello Bennison
  helo gibson
hello world
```
#### 7:console.assert()
  
  when we use some condition in console.assert, when the condition is not true the console.assert throw the error message. 
  
```
let x = 5;
let y = 5;
console.assert(x + y == 11, "Expression returned 'false'");
```
....................................................................................................................................


