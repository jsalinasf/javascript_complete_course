// Lecture 04: Arrow Functions

const years = [1990, 1965, 1982, 1937]

// ES5
var ages5 = years.map(function(el) {
    return 2019 - el;
})
console.log(ages5);

// ES6
let ages6 = years.map(el => 2019 - el)
console.log(ages6);

ages6 = years.map((el, idx) => `Age ${idx + 1}: ${2019 - el}`);
console.log(ages6);

ages6 = years.map((el, idx) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age ${idx + 1}: ${age}`;
});
console.log(ages6);
