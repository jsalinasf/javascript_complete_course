// Lecture 03: Strings Methods

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2018 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today He is ' + calcAge(yearOfBirth) + '.');

// ES6
// Template Literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today He is ${calcAge(yearOfBirth)}.`)

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));  // true
console.log(n.startsWith('j'));  // false

console.log(n.endsWith('th')); // true
console.log(n.endsWith('Ws')); // false

console.log(n.includes(' ')); // true
console.log(n.includes('ah')); // false

console.log(firstName.repeat(10));
console.log(`${firstName} `.repeat(10));

