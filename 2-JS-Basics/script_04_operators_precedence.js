// Lesson 04: Operators Precedence

// For more details:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x = 3;
x *= 2; // x = x * 2;
console.log(x); // x = 6
x += 2;
console.log(x); // x = 6 + 2

// Increment and decrement
x++; // x = x + 1 or x +=1
console.log(x);

x--; // x = x - 1 or x -=1
console.log(x);