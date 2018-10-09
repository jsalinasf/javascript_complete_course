// Lesson 01: Hoisting

// Hoisting with FUNCTIONS

// Look how the function is available even though 
// is not even declared in the code yet
calculateAge(1965);



// Hositing ONLY WORKS with FUNCTION DECLARATIONS!!!!!
function calculateAge(year) {
    console.log(2018 - year);
}


//let's what happens with function expressions

// look how the function expression doesn't work when used before 
// the declaration

// retirement(1980); // => It throws an error

var retirement = function(year) {
    console.log(65 - (2018 - year));
}

retirement(1980);

// Hoisting with VARIABLES

console.log(age);   // It comes out as UNDEFINED... that's exactly how 
                    //  HOISTING works with variables... it set;s them as undefined

var age = 24;
console.log(age);

function foo() {     // Remember functions get their OWN execution context object
    var age = 77;
    console.log(age);
}
foo();
console.log(age);