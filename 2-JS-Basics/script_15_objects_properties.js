// Lesson 12: Objects and Properties

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Bob',"Lois"],
    job: 'teacher',
    isMarried: false
}

console.log(john);

console.log(john.firstName, john.birthYear);
console.log(john['lastName'], john['firstName']);

var x = 'birthYear';
console.log(john[x]);


john.job = 'designer';
john['isMarried'] = true;
console.log(john);


// New Object syntax

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1986;
jane['lastName'] = 'Smith;';

console.log(jane);