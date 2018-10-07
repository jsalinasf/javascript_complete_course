// Coding Challenge 04

var mark = {
    fullName: 'Mark Miller',
    mass: 101,       // kg
    height: 1.89,   // meters

    calcBMI: function() {
        this.bmi = this.mass / (Math.pow(this.height,2));
        return this.bmi;
    }
}

var john = {
    fullName: 'John Smith',
    mass: 101,       // kg
    height: 1.89,   // meters

    calcBMI: function() {
        this.bmi = this.mass / (Math.pow(this.height,2));
        return this.bmi;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark['fullName'], mark['bmi']);
} else if (john.bmi > mark.bmi) {
    console.log(john.fullName, john.bmi);
} else {
    console.log("They both have the same BMI: " + john.bmi);
}
