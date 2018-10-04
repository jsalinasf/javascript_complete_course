// Lesson 01: Variables and Data Types

// These are the Data types existing on Javascript:
// Number, String Boolean, Undefined and Null

var firstName = "Charles";
console.log(firstName);

var lastName = "Xavier";
var age = 28;

var fullAge = true;

console.log(fullAge);

var job;

// It will log "undefined" because even though we declare the
// variable earlier, I haven't assigned a value to it yet
console.log(job);

job = 'teacher';
console.log(job);

// Variable Names can start with $ (dollar sign) or _ (underscore)
var $3years = 3;
var _3years = 3;
console.log($3years + " " + _3years);

/* NOT ALLOWED

=> Variable Names can not start with a number
var 3years = 3;

=> Symbols like "/" can not be used in the middle of a variable name
var john/mark = 3;

=> Using reserved words to name variables
var function = 3;  */
