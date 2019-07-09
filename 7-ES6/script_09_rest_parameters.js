// Lesson 9: Rest Parameters

// ES5
// function isFullAge5 () {
//     //console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(function(cur) {
//         console.log((2019 - cur) >= 18);
//     })
// }

// isFullAge5(1990, 2004, 1965);
// isFullAge5(1990, 2004, 1965, 2016, 1986);

// ES6
// function isFullAge6 (...years) {
//     years.forEach(cur => console.log((2019 - cur >= 18)));
// }

// isFullAge6(1990, 2004, 1965);
// isFullAge6(1990, 2004, 1965, 2016, 1986);


// One step further, passing one variable and a set of variables
// Example: Set of ages to test is they are full age or not and
// the age variable at which they are considered full age


// ES5
function isFullAge5 (limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    //console.log(arguments);
    argsArr.forEach(function(cur) {
        console.log((2019 - cur) >= limit);
    })
}

isFullAge5(21, 1990, 2004, 1965);
isFullAge5(18, 1990, 2004, 1965, 2016, 1986);

// ES6
function isFullAge6 (limit, ...years) {
    years.forEach(cur => console.log((2019 - cur >= limit)));
}

isFullAge6(21, 1990, 2004, 1965);
isFullAge6(18, 1990, 2004, 1965, 2016, 1986);