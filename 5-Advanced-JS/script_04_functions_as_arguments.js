// Lesson 04: Functions

// Passing functions as arguments

var years = [1980, 1965, 1937, 2008, 2016];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (i=0; i<arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHearRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages,maxHearRate);
console.log(rates);
