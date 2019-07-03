// Lecture 01: let and const

//  ES5
// Function scoped
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5,age5);

// // ES6
// // Block scoped
// const name6 = 'Jane Smith';
// let age6 = 23;
// // const values can not change
// // name6 = 'Jane Miller'
// console.log(name6,age6);

// ES5
function driverLicense5(passedTest) {
    // var is Function-Scoped
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName,'born in',yearOfBirth,',is now officially allowed to drive a car.');
}

driverLicense5(true);

// ES6
function driverLicense6(passedTest) {
    // let is Block-Scoped

    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }    
    console.log(firstName,'born in',yearOfBirth,',is now officially allowed to drive a car.');
}

driverLicense6(true);



let i = 23;

// The following declaration of i is completely different from the previous one (line 47)
for (let i=0; i<5; i++) {
    console.log(i);
}

console.log(i);