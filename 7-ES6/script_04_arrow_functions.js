// Lecture 04: Arrow Functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2018 - el;
});
console.log(ages5);

// ES6
// Arrow function with one argument
let ages6 = years.map(el => 2018 - el);
console.log(ages6);
// Arrow function with multiple arguments
ages6 = years.map((el, index) => `Age Element ${index + 1}: ${2018 - el}.`);
console.log(ages6);
// Arrow function with multiple lines of code and multiple arguments.
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age Element ${index + 1}: ${age}.`
});
console.log(ages6);