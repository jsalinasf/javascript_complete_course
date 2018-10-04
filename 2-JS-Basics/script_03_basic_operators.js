// Lesson 03: Basic Operators

var year, yearJohn, yearMark, ageJohn, ageMark;

// Math Operators
now = 2020;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);


// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// typeof operator
var firstName = "Charles";
var x;
console.log(typeof firstName);
console.log(typeof now);
console.log(typeof johnOlder);
console.log(typeof x);


