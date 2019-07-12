// Lesson: Classes with Subclasses

// Inheritance


// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge5 = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;    
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals ++;
}

var johnAthlete5 = new Athlete5('john', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge5();

console.log(johnAthlete5.medals);
johnAthlete5.wonMedal();
console.log(johnAthlete5.medals);

