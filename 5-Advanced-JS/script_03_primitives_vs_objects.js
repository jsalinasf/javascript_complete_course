// Lesson 03: Primitive Vs Objects

// Primitives:
// Numbers, Strings, Boolean, Null, Undefined

// Everything else is an object

var a = 23;
var b = a;

// Primitives
a = 46;
console.log(a,b);


// Objects
var obj1 = {
    name: 'John',
    age: 26
}
var obj2 = obj1;    // this instruction does NOT create a
                    // a new Object (different than with primitives)
                    // It creates another pointer to the same
                    // object, that's why you can that the age
                    // is 30 in both cases
                    // obj2 is NOT a different object
                    // obj2 is another reference to the same
                    // object 'john'
obj1.age = 30;
console.log(obj1.age, obj2.age);


// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'New York'
};

console.log(age);
console.log(obj);

function change(newAge, b) {
    newAge = 30;
    b.city = 'San Francisco';
}

// We dont pass the object to a function
// We pass a REFERENCE to the object
change(age, obj);

console.log(age);
console.log(obj);