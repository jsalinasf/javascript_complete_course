// lecture: Classes

// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge5 = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('john', 1990, 'teacher');
john5.calculateAge5();

// ES6

// Classes are NOT hoisted, so we need to implement them first in our code and later we can start using them

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge6() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hello there!');
    }
}

const mike6 = new Person6('mike', 2011, 'student');
mike6.calculateAge6();

// static methods can not be used with instances of the class, only with the class itself

Person6.greeting();