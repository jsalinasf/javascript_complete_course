// Lecture 02: Blocks and IIFEs


// ES5

// // for data privacy we could use IIFE
// (function () {
//     var c = 3;
// })

// // The following block can NOT access 'c' variable
// // This is how you achieved "privacy" in ES5
// console.log(c);


// ES6
{
    const a = 2;
    let b = 4;
    var c = 7;
}

// this wll NOT work because LET and CONST in ES6 are BLOCK SCOPED
// thus we may achieve data privacy
console.log(a+b);

// this wll work , VAR variables are FUNCTION SCOPED
console.log(c);


