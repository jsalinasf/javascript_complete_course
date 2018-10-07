// Coding Challenge 05 - Part I

var johnFamily = {

    bills: [124, 48, 268, 168, 42],
    tips: [],
    finalPaidAmounts: [],

    calculateTips: function() {
        var tip = 0;
        
        for (var i=0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                tip = .2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                tip = .15;                
            } else {
                tip = .1;
            }
        
            this.tips.push(this.bills[i] * tip);
            this.finalPaidAmounts.push(this.bills[i] + this.bills[i] * tip);
        }
    }
}

johnFamily.calculateTips();
console.log(johnFamily);
