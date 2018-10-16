// Coding Challenge 05 - Part II

function calculateAverage(amounts) {
    sum = 0;
    for (var i=0; i < amounts.length; i++) {
        sum += amounts[i];
    }
    return sum / amounts.length;
}

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],

    calculateTips: function() {        
        
        this.tips = [];
        this.finalPaidAmounts = [];
        
        for (var i=0; i < this.bills.length; i++) {
            var tip;
            var bill = this.bills[i];
            if (bill < 50) {
                tip = .2;
            } else if (bill >= 50 && bill < 200) {
                tip = .15;                
            } else {
                tip = .1;
            }
        
            this.tips.push(bill * tip);
            this.finalPaidAmounts.push(bill + bill * tip);
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 5, 110, 45],

    calculateTips: function() {

        this.tips = [];
        this.finalPaidAmounts = [];   
        
        for (var i=0; i < this.bills.length; i++) {
            var tip;
            var bill = this.bills[i];
            if (bill < 100) {
                tip = .2;
            } else if (bill >= 100 && bill < 300) {
                tip = .1;                
            } else {
                tip = .25;
            }
        
            this.tips.push(bill * tip);
            this.finalPaidAmounts.push(bill + bill * tip);
        }
    }
}


john.calculateTips();
mark.calculateTips();

console.log(john);
console.log(mark);

john.average = calculateAverage(john.tips);
mark.average = calculateAverage(mark.tips);

console.log(john.fullName + '\'s family spent on average: ' + john.average);
console.log(mark.fullName + '\'s family spent on average: ' + mark.average);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips with an average of ' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips with an average of ' + mark.average);
} else {
    console.log('Both Families pay the same tips with an average of ' + john.average);
}
