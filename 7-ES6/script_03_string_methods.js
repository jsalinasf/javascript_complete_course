// Lecture 03: Strings Methods

let firstName = 'John';
let lastName = 'Smith'
const yearOfBirth = 1990;

function calcAge(year) {
    return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today He is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today He is ${calcAge(yearOfBirth)} years old`);

const n = `${firstName} ${lastName}`;
console.log(n);

// startsWith, includes and endsWith are case-sensitive
console.log(n.startsWith('Jo')); // true
console.log(n.includes('oh')); // true
console.log(n.endsWith('nas')); // false

console.log(firstName.repeat(5));