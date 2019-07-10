// lesson 11: Maps

const question = new Map();

question.set('question','What is the official name of the latest major JavaScript version?')
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'Correct Answer :D');
question.set(false,'Wrong, please try again!');

console.log(question.get('question'));
// console.log(question.size);

// has validates if the key exists
// if (question.has(4)) {
//     question.delete(4);
// }
// console.log(question.size);

// Deletes all of the Map
// question.clear();
// console.log(question.size);


// MAPS are ITERABLE

// question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

// for (let [key, value] of question.entries()) {
//     console.log(`This is ${key} and it's set to ${value}`)
// }

// for (let key of question.keys()) {
//     if (typeof key === 'number') console.log(`${key}`);
// }

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

let ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));