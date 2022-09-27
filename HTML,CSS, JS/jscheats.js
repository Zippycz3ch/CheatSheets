'apple'                 //single quotes
"apple"                 //double quotes


    // Operators


    || or
    && and
!not //turns true to false and vice versa

var roll = `You rolled a ${die1} and ${die2}, they sum up to ${die1 + die2}`;               // String Template Literal

Math.floor(Math.random() * 10 + 1);                 // Generate random number from 1 to 10

if (randNumber < 5) {                               // If statement
    console.log("Number is lower than 5")
}

const password = prompt("Enter password");          // Nested Conditionals

if (password.length > 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Heslo ok")
    }
    else {
        console.log("Mezera v hesle")
    }
} else {
    console.log("Kráské heslo")
}

const password = prompt("Enter password");          // logical AND

if (password.length > 6 && password.indexOf(' ') === -1) {
    console.log("Heslo ok")
}
else {
    console.log("Krátké heslo")
}

let variable = prompt("Input var");

if (!variable) {                                    // Check for empty variable
    variable = prompt("Try again, var empty")
}

if (!(age >= 0 && age < 5 || age >= 65)) {              // not, and and or 
    console.log("msg")
}

let day = prompt("asdasd");                             // Switch statement
day = parseInt(day)                                     // X to Int
switch (day) {
    case 1:
        console.log("Monday!");
        break;
    case 2:
        console.log("Tuesday!");
        break;
    default:
        console.log("Error")
}


// Arrays

let abc = [];                                           // Empty array

let abc = ['red', 'orange', 'yellow'];                  // Array of strings

let abc = [19, 20, 56, 12, 51];                         // Array of numbers

let abc = [true, 68, 'cat', null];                      // Mixed array

Array[1]                                                // Select second position from array
Array[1][1]                                             // Select second letter from second position from array
Array[1] = '2'                                          // Select second position from array and change it to '2'
Array[11] = "item"                                      // Add item to array on selected position. Adds empty space if the last item in array has lower position than item -1
Array.push("item")                                      // Add item to end of array
Array.push("item1", "item2")                            // Add items to end of array
Array.pop()                                             // Removes last item from array
Array.unshift("item")                                   // Add item to start of array
Array.unshift("item1", "item2")                         // Add items to start of array
Array.shift()                                           // Removes first item from array
const Array = ['Jan', 'March', 'April', 'June'];        // Const array that cant be reasigned, content can be changed
Array.splice(1, 0, 'Feb');                              // Adds item to array (index, delete item, item)
Array[3][1] = "Item";                                   // Adds item to nested array

// Objects

const dataData = { data1: 1337, data2: 7331, data3: '13.37', data4: ['Red', 'Blue', 'Yellow'] }             // Object
dataData['data4']                                                                                           // Calling data in object
dataData.data4                                                                                              // Calling data in object
const dataData = [{ data1: 1337, data2: 7331, data3: '13.37', data4: ['Red', 'Blue', 'Yellow'] },           // Nesting objects and arrays
{ data1: 1338, data2: 8331, data3: '13.38', data4: ['R3d', '8lue', 'Y3ll0w'] }
]

const object = {
    name: 'dataName',
    address: 'dataAddress',
    city: 'dataCity',
    state: 'dataState',
    zipcode: 'dataZipcode',
}


let String = object['data'] + ', ' + object['data'] + ', ' + object['data'] + ' ' + object['data'];         // Creating string from object

String.objectInString = 'newdata';                                                                           // Editing or creating new data in object
String['objectInString'] = 'newdata';                                                                        // Editing or creating new data in object


for (let i = 0; i < 10; i++) {
    const element = (i);
    console.log(i)
}