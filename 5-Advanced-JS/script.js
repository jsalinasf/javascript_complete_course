// Lesson 01: Function Constructor
// After Vacation

var Pet = function(name, type, yearOfBirth) {
    this.name = name;
    this.type = type;
    this.yearOfBirth = yearOfBirth;
}

Pet.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

Pet.prototype.legs = 4;

var pet01 = new Pet('Sarah', 'Dog', 2017);
var pet02 = new Pet('Bayli', 'Dog', 2016);
var pet03 = new Pet('Thunder', 'Horse', 2013);

pet01.calculateAge();
pet02.calculateAge();
pet03.calculateAge();

console.log(pet01.legs);
console.log(pet02.legs);
console.log(pet03.legs);



