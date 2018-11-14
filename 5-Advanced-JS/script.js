// Lesson 01: Function Constructor
// After Vacation

// var Pet = function(name, type, yearOfBirth) {
//     this.name = name;
//     this.type = type;
//     this.yearOfBirth = yearOfBirth;
// }

// Pet.prototype.calculateAge = function() {
//     console.log(2018 - this.yearOfBirth);
// }

// Pet.prototype.legs = 4;

// var pet01 = new Pet('Sarah', 'Dog', 2017);
// var pet02 = new Pet('Bayli', 'Dog', 2016);
// var pet03 = new Pet('Thunder', 'Horse', 2013);

// pet01.calculateAge();
// pet02.calculateAge();
// pet03.calculateAge();

// console.log(pet01.legs);
// console.log(pet02.legs);
// console.log(pet03.legs);

// =============================================================================================================

// Lesson 02: Object.create

// var petProto = {
//     calculateAge: function() {
//         console.log(2018 - this.yearOfBirth);
//     }
// }

// var pet01 = Object.create(petProto);

// pet01.name = 'sarah';
// pet01.type = 'dog';
// pet01.yearOfBirth = 2016;
// var pet02 = Object.create(petProto,
//     {
//         name: {value: 'Bayli'},
//         yearOfBirth: {value: 2017},
//         type: {value: 'dog'}
//     }
// )

// =============================================================================================================

// Lesson 03: Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a, b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1; // This does NOT create a COPY or a NEW Object. It creates a reference that points to the same object
obj1.age = 99;
console.log(obj1.age, obj2.age);

// Las variables que apuntan a objectos, no guardan ningun valor per se... guardan la DIRECCION al objeto - PUNTERO

// Functions
var age = 27;
var obj = {
    name: 'John',
    city: 'New York'    
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age, obj.city);

