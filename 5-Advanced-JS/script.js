// Lesson 01: Function Constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1964, 'designer');
var erick = new Person('Erick', 1981, 'student');

john.calculateAge();
jane.calculateAge();
erick.calculateAge();

var Car = function(maker, year, type, hp) {
    this.maker = maker;
    this.year = year;
    this.type= type;
    this.hp = hp;
}

Car.prototype.countryMaker = function() {
    
    switch (this.maker) {
        case 'Chevrolet':
            console.log('USA');
            break;
        case 'Ferrari':
            console.log('Italy');
            break;
        case 'Renault':
            console.log('France');
            break;
        default:
            console.log('Other Country');
    }
}

var johnCar = new Car('Chevrolet', 2013, 'truck', 215);
var janeCar = new Car('Ferrari', 2017, 'Sport Car', 270);
var erickCar = new Car('Renault', 2011, 'sedan', 105);

johnCar.countryMaker();
janeCar.countryMaker();
erickCar.countryMaker();


var Pet = function(name, type, yearOfBirth) {
    this.name = name;
    this.type = type;
    this.yearOfBirth = yearOfBirth;
}

Pet.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

var sara = new Pet('Sarah', 'Dog', 2013);
var baily = new Pet('Baily', 'Dog', 2014);
var nemo = new Pet('Nemo', 'fish', 2011);

sara.calculateAge();
baily.calculateAge();
nemo.calculateAge();
