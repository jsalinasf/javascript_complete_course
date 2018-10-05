// Lesson 08: Truthy and Falsy values and equality operators

/* Falsy values: undefined, null, 0, '', NaN
will be converted to FALSE when evaluated in a TRUE / FALSE condition  */

/* Truthy values: NOT Falsy Values
will be converted to TRUE when evaluated in a TRUE / FALSE condition  */

var height; // Declared but not assigned a value
            // then UNDEFINED and then FALSY value

if (height) {
    console.log("Variable is defined");
} else {
    console.log("Variable has not been defined");
}

height = 23;    // Declared and Assigned
                // then TRUTHY value

if (height) {
    console.log("Variable is defined");
} else {
    console.log("Variable has not been defined");
}

height = 0;     // Declared and Assigned
                // But the value assigned is ZERO (A Falsy Value)
                // So the else condition will be printed
if (height) {
    console.log("Variable is defined");
} else {
    console.log("Variable has not been defined");
}

// Common Pattern in Javascript to check if a variable has been defined
if (height || height === 0) {
    console.log("Variable is defined");
} else {
    console.log("Variable has not been defined");
}


// Equality Operator

height = 23;    // Here Height is a number

if (height == '23') { // Here we are comparing a string with a number but..
    console.log("The == operator does type coercion!") // 23 == "23"
}

if (height === '23') { // Here we are comparing a string with a number but..
    console.log("The condition is false because of the === operator")
} else {
    console.log("The === operator compares value and type") // 23 != "23"
}