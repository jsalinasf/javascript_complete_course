// Coding Challenge 01

var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn, isMarkBmiHigher;

// Mark
massMark = 81.82; // mass is in kg
heightMark = 1.81; // height is in meters
bmiMark = massMark / (Math.pow(heightMark,2));

// John
massJohn = 85.90; // mass is in kg
heightJohn = 1.92; // height is in meters
bmiJohn = massJohn / (Math.pow(heightJohn,2));

isMarkBmiHigher = bmiMark > bmiJohn;

console.log("Mark's BMI: " + bmiMark);
console.log("John's BMI: " + bmiJohn);

// Check the scape character "\"
console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBmiHigher);



