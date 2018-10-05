// Lesson 07: The Ternary Operator and Switch Statements

var firstName = "John";
age = 9;

// TERNARY OPERATOR
// Has 3 Operands: Condition, If block, Else block

var canDrink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + " drinks " + canDrink);

// Here you have the same functionality with if - else block
// All those lines compressed into one
if (age < 18) {
    canDrink = "juice";
} else {
    canDrink = "beer";
}
console.log(firstName + " drinks " + canDrink);


// SWITCH Statement
 var job = "instructor";

 switch (job) {
    case "teacher":
    case "instructor":
        console.log(firstName + " teaches kids how to code");
        break;
    case "driver":
        console.log(firstName + " drives an Uber");
        break;
    case "designer":
        console.log(firstName + " designs beautiful websites");
        break;
    default:
        console.log(firstName + " does something else");
 }

 var age = 52;

 // Switch (true) is a trick for evaluating numeric expressions

 switch (true) {
    case age < 13:
        console.log(firstName + " is a boy");
        break;
    case age >= 13 && age < 20:
        console.log(firstName + " is a teenager");
        break;
    case age >= 20 && age < 30:
        console.log(firstName + " is a young man");
        break;
    default:
        console.log(firstName + " is a man");
}