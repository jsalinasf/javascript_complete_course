// Lesson 6: Destructuring

// Easy way to extract data from an array or object

var john = ['john', 26];

// ES5
var name5 = john[0];
var age5 = john[1];
console.log(name5,age5);

// ES6
const [name6, age6] = john;
console.log(name6,age6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(firstName,lastName);

const{firstName: a, lastName: b} = obj;
console.log(a,b);



function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;    
    return [age, 65 - age];
}

const [currentAge, retirement] = calcAgeRetirement(1980);
console.log(currentAge,retirement);




