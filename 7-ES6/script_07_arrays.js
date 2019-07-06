// Lesson 7: ES6 Arrays

const boxes = document.querySelectorAll('.box');

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {cur.style.backgroundColor = 'limegreen'});

// ES6
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5
// for (var i=0; i<boxesArr5.length; i++) {
//     if (boxesArr5[i].className === 'box blue') {
//         continue;
//     }
//     boxesArr5[i].textContent = 'I\'ve changed to blue';
// }

// ES6
const boxesArr6 = Array.from(boxes);
for (const cur of boxesArr6 ) {
    if (cur.className.includes('blue')) {continue;}
    cur.textContent = 'I have  changed to blue';
}


// ES5
var ages = [12,17,8,21,14,11];

var fullAges = ages.map(function(el) {    
    return el > 18;  
});

console.log(fullAges);
console.log(fullAges.indexOf(true));
console.log(ages[fullAges.indexOf(true)]);

// ES6

// to find the index
console.log(ages.findIndex(cur => cur >= 18));

// to find the element
console.log(ages.find(cur => cur >= 18));