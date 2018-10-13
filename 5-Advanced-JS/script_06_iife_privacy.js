// Lesson 06: IIFE

// Immediately Invoked Function Expressions

// IIFE is the perfect solution to have private VARIABLES
// hidden for the Scope Chain
// DATA PRIVACY

// You can NOT reuse this functions


// IIFE Function
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();


// IIFE Function with variables
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
