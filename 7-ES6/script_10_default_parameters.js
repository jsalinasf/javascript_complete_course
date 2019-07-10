// Lesson 10: Default Parameters


// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
//     lastName === undefined ? lastName = 'Smith' : lastName;
//     nationality = nationality || 'american';
    
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1997, 'Diaz', 'spanish');

// console.log(john);
// console.log(emily);



// ES6

function SmithPerson(firstName, yearOfBirth, lastName='Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1997, 'Diaz', 'spanish');

console.log(john);
console.log(emily);