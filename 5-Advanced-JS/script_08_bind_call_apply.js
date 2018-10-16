// Lesson 08: Bind, Call and Apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m ' + 
            this.name + ', I\'m a ' + this.job + ' and I\'m a ' + this.age + ' years old');
        } else if (style === 'friendly') {
            console.log('Hey What\'s up? I\'m ' + this.name + '. I\'m a ' + this.job +
             ' and I\'m a ' + this.age + ' years old. Have a nice ' + timeOfDay + '!');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('friendly','night');

// Method Borrowing. The object "emily" is borrowing 
// the "presentation" method from the object "john"

// CALL method allow us to set the "THIS" object

john.presentation.call(emily, 'formal', 'afternoon');

// APPLY method is similar to "CALL" method but it only accepts TWO parameters
// The object and an ARRAY of parameters I need to pass

john.presentation.apply(emily,['friendly', 'morning']);

// BIND Method is similar to the call method as well
// It generates a "COPY" of the function so we can store it somewhere
// I can create functions with PRESET Arguments

var johnFriendly = john.presentation.bind(john, 'friendly')

// CARRYING  --> Bind is extremely useful for this
// It is when we create a function based on another function but with 
// some PRESET parameters
johnFriendly('night');
johnFriendly('afternoon');
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily,'formal');

emilyFormal('night');
emilyFormal('afternoon');



