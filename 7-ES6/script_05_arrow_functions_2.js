// Lesson 5: Arrow Functions 201

// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;

//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + ' and its color is ' + self.color;
//             alert(str);
//         })
//     }
// }

// box5.clickMe();


//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        // Arrow Function shares the lexical THIS of its surroundings 
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and its color is ' + this.color;
            alert(str);
        })
    }
}

box6.clickMe();


// This example doesn't work because we have two arrow function
// the first arrow function shares its surroundings now with the
// global object therein the second arrow function can't access
// the variables green neither 1

// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         // Arrow Function shares the lexical THIS of its surroundings 
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and its color is ' + this.color;
//             alert(str);
//         })
//     }
// }

// box66.clickMe();

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}



// ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);
new Person('Mike').myFriends6(friends);
