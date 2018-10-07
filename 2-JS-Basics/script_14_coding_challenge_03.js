// Coding Challenge 03

function calculateTip (bill) {
    var tip = 0;
    if (bill < 50) {
        tip = bill * 0.2;        
    } else if (bill >= 50 && bill < 200) {
        tip = bill * 0.15;        
    } else {
        tip = bill * 0.1;
    }
    return tip;
}

var bills = [124, 48, 268];
var tips = [];
var finalPaidAmounts = [];


for (i=0; i < bills.length; i++) {
    var finalAmount = 0;
    tips.push(calculateTip(bills[i]));
    finalAmount = bills[i] + calculateTip(bills[i]);
    finalPaidAmounts.push(finalAmount);
}

console.log(bills);
console.log(tips);
console.log(finalPaidAmounts);
