// lesson 03: The "THIS" Keyword

// console.log(this);

// calculateAge(1986);

// function calculateAge(year) {
//     console.log(2018 - year);
//     console.log(this);
// }


var john = {
    name: 'John',
    yearOfBirth: 1976,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);

        // function innerFunction() {
        //     console.log(this);
        // }

        // innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1970
}

mike.calculateAge = john.calculateAge;

mike.calculateAge();