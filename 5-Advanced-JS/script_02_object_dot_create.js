// Lesson 02: Object.create

var personProto = {
    calculateAge : function() {
        console.log(2018 - this.yearOfBirth)
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1997},
    job : {value: 'designer'}
})