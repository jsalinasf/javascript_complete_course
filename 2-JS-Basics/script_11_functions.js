// Lesson 09: Functions

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year); // Functions can call another functions
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + " retires in " + retirement + " years");
    } else {
        console.log(firstName + " is already retired");
    }
    
}

var ageJohn = (calculateAge(1980));
var ageStu = (calculateAge(1945));
var ageMary = (calculateAge(1946));
console.log(ageJohn, ageStu, ageMary);

yearsUntilRetirement(1990,"John");
yearsUntilRetirement(1954,"Mike");
yearsUntilRetirement(1974,"Tess");
