// Lesson 02: Scoping and the Scope Chain

var a = 'Hello';
first();

function first() {
    var b = ' Hola';
    second();

    function second() {
        var c = ' Au Revoir';
        console.log(a + b + c);
    }
}


// Execution Stack vs Scope Chain

// REMEMBER: The Execution Stack is different from the Scope Chain

var x = 'Hello';
fourth();

function fourth() {
    var y = ' Hola';
    fifth();

    function fifth() {      // lexically written to fourth()
        var z = ' Au Revoir';      // This is the reason why it can access x, y and z
        console.log(x + y + z);
        sixth();    // fifth() function can access sixth() function because of scope chain
                    // But sixth() is not lexically written to the fourth() and fifth() functions
                    // so it can't access "y" + "z" variables
                    // It can access "x" variable because is on the Global Context Object
    }
}
             

function sixth() {
    var d = ' John';
    console.log(x + d);
    console.log (y + z);    
}
