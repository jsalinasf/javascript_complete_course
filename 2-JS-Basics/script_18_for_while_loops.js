// Lesson 14: Loops and Iteration

for (var i=0; i<10; i++) {
    console.log(i);
}

for (var i=0; i<=10; i += 2) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false, '##### END Loop #####'];

// FOR loop
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// WHILE loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i ++;
}

// Continue and Break Statements

// Continue => Breaks the current iteration and continues with next one
// Break => Exits the loop

// CONTINUE
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

// BREAK
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}


// Micro Challenge - LOOPING BACKWARDS

for (var i=john.length -1; i>=0; i--) {
    console.log(john[i]);
}
