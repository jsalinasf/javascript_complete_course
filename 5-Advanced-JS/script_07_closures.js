// Lesson 07: Closures

function retirement(retirementAge) {
    var a = ' years until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

//retirement(66)(1986);

var retirementUSA = retirement(66);
var retirementGERMANY = retirement(65);
var retirementISLAND = retirement(72);

retirementUSA(1980);
retirementGERMANY(1980);
retirementISLAND(1980);


function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log(name + ', What subject do you teach?');
        } else {
            console.log('Hello ' + name + ' What do you do?');
        }        
    }
}


var questionTeacher = interviewQuestion('teacher');
questionTeacher('john');

interviewQuestion('designer')('jane');