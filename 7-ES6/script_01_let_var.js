// Lecture 01: let and const

/*

// ES5
var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';
console.log(name5, age5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;

// name6 = 'Jane Miller'; // CONST have immutable values!
console.log(name6, age6)
*/

// ES5 functions
function driverLicense6 (passedTest) {
    // VAR => Function Scoped
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born on ' + yearOfBirth + ' is now oficially allowed to drive a car.');
}
driverLicense(true);

// ES6 functions
function driverLicense (passedTest) {
    // LET => Block scoped
    // console.log(firstName); with LET we can't use a variable before it is declared
    let firstName;
    const yearOfBirth = 1990;
    if (passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ', born on ' + yearOfBirth + ' is now oficially allowed to drive a car.');
}
driverLicense6(true);

console.log('\n')
// ES5
// Here i is the same variable, children functions can access parents variables
var j = 23;
for (var j = 0; j < 5; j++) {
    console.log(j);
}
console.log(j); // Check the final value of 'j' is 5... the for cycle changed its original value of 23

console.log('\n')
// ES6
// Here i is a different variable
let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // Check the final value of 'i' the for cycle didn't change it. It is a different variable