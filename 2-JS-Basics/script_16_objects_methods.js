// Lesson 13: Objects Methods

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1994,
    family: ['Jane','Bob',"Lois"],
    job: 'teacher',
    isMarried: false,

    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
}

john.calcAge();
console.log(john);

