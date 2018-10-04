// Lesson 02: Variable mutation and type coercion

var firstName = "Charles";
var age = 28;

// Type coercion
// It can print the value "age" without doing anything
// Javascript can coercion the value to string directly
console.log(firstName + " is " + age + " year old");

var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + " is " + age + " year old "+ job + ". Is He married? " + isMarried);

// Variable Mutation
// I change de data type of the variable "age" from
// Number to string
age = 'twenty eight';
job = 'driver'
alert(firstName + " is " + age + " year old "+ job + ". Is He married? " + isMarried);

var lastName = prompt("What is his Last Name? ");
console.log(firstName + " " + lastName);

// Javascript a dynamic data type language