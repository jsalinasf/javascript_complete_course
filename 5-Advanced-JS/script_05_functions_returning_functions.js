// Lesson 05: Functions returning Functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', What subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ' What do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

// The returned object (a function) is stored on the variable "teacherQuestion"
teacherQuestion('John');
designerQuestion('Jane');
designerQuestion('Mike');
designerQuestion('Mark');

// Check this one out
interviewQuestion('teacher')('Ruper');




