// Lesson 10: Function Statements and Expressions


// FUNCTION DECLARATION don't produce immediate VALUES

// FUNCTION EXPRESSION produces an IMMEDIATE Result


// The following is an example of FUNCTION DECLARATION
// function whatDoYouDoNow(job, firstName) {}


// The following is an example of FUNCTION EXPRESSION
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + " teaches kids how to code";
            // break is not needed because return will immediately finish the function
        case 'driver':
            return firstName + " drives and Uber on NY";
        case 'designer':
            return firstName + " designs beautiful websites";
        default:
        return "select another profession";
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('driver','Mike'));
console.log(whatDoYouDo('designer','Robi'));
