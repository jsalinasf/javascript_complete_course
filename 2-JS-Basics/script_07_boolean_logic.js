// Lesson 06: Boolean Logic

var firstName = 'John';
var age = 37;

if (age < 13) {
    console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + " is a teenager.");
} else if (age >= 20 && age < 30) {
    console.log(firstName + " is a young man.");
} else {
    console.log(firstName + " is a man.");
}
