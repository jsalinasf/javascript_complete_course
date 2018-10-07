// Lesson 11: Arrays

// Arrays are ZERO BASED


// Initialize new Array
var names = ['John', 'Mark', 'Jane'];

var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

console.log(names[0], names[1], names[2]);

// Mutate Array Data
names[0] = 'Ben';
names[5] = 'Mary'; // In here position 3 and 4 will be filled with empty spaces
names[names.length] = 'Sue'; // I added Sue at the end of the array with no empty spaces
console.log(names);

// Different Data Types

var john = ['John', 'Smith', 1990, 'teacher', false];
console.log(john);

// METHODS

// PUSH ADDS ONE element to the END of the Array
john.push('blue');
console.log(john);

// UNSHIFT ADDS ONE element to the BEGINNING of the Array
john.unshift('Mr');
console.log(john);

// POP REMOVES ONE Element from the END of the Array
john.pop()
console.log(john);

// SHIFT REMOVES ONE Element from the BEGINNING of the Array
john.shift()
console.log(john);

// indexOf will return the position of the element in the array
console.log(john.indexOf(1990));
// indexOf will return -1 when no element is found
console.log(john.indexOf('George'));
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a Designer' : 'John is a Designer';
console.log(isDesigner);




