// Lecture 02: Blocks and IIFEs


// ES6 DATA PRIVACY
// {
//     const a = 1;
//     let b = 2;
// }

// // DATA PRIVACY... these variables can not be accessed outside of the block
// console.log(a + b);


// ES5 DATA PRIVACY

(function () {
    var c = 3;
})();
// For keep variables private on ES5 we had to use IIFEs
console.log(c);