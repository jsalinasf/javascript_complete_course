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
// var a = 23;
// var b = a;
// a = 46;
// console.log(a, b);

// // Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1; // This does NOT create a COPY or a NEW Object. It creates a reference that points to the same object
// obj1.age = 99;
// console.log(obj1.age, obj2.age);

// // Las variables que apuntan a objectos, no guardan ningun valor per se... guardan la DIRECCION al objeto - PUNTERO

// // Functions
// var age = 27;
// var obj = {
//     name: 'John',
//     city: 'New York'    
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age, obj.city);

// =============================================================================================================

// Lesson 04: Passing Functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// };

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
    
    
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);


// =============================================================================================================

// Lesson 05: Functions returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name +  ' ?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('Mark');

// var designerQuestion = interviewQuestion('designer');
// designerQuestion('John');
// designerQuestion('Ruper');
// designerQuestion('Luis');
// designerQuestion('George');
// designerQuestion('Pam');


// var genericQuestion = interviewQuestion('cop');
// genericQuestion('Mike');
// interviewQuestion('lawyer')('JP');

// =============================================================================================================

// Lesson 06: IIFE Immediately invoked function expressions

// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// // IIFE with parameters
// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

// =============================================================================================================

// Lesson 07: Closures

// function retirement(retirementAge) {
//     a = ' years until retirement.';
//     return function(yearOfBirth) {
//         var age = 2018 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1980);
// //retirement(66)(1980);

// var retirementGER = retirement(65);
// retirementGER(1980);

// var retirementIceland = retirement(67);
// retirementIceland(1980);


// function interviewQuestion(job) {
//     switch (job) {
//         case 'teacher':
//             question = 'What do you teach?';
//             break;
//         case 'designer':
//             question = 'What is UX?';
//             break;
//         default:
//             question = 'What do you do?';
//      }
    
//     return function(name) {
//         console.log(name + ', ' + question);    
//     }
// }

// interviewQuestion('designer')('Jane');

// interviewQuestion('teacher')('Mark');

// var interviewQuestionCop = interviewQuestion('cop');
// interviewQuestionCop('Lois');

// =============================================================================================================

// Lesson 07: Bind Call and Apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m ' + this.name + ', I\'m ' + this.age + ' years old and I\'m a '  + this.job);
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m ' + this.age + ' years old and I\'m a '  + this.job + '. Have a wonderful ' + timeOfDay);
        }
    }
};

john.presentation('formal','evening');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

// Method Borrowing

// Call method allow us to set the "this" variable, it is the first argument
john.presentation.call(emily, 'friendly', 'morning');

// Apply Method
john.presentation.apply(emily,['formal','night']);

// Bind Method
// It allows to preset some arguments
var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('night');
johnFriendly('morning');
johnFriendly('evening');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');

