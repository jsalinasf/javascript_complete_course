// Coding Challenge 02

var teamJohn, teamMike, teamMary, winner;

teamJohn = (89 + 120 + 103) / 3;
teamMike = (116 + 94 + 143) / 3;
teamMary = (116 + 94 + 123) / 3;

console.log('John\'s Team Average: ' + teamJohn);
console.log('Mike\'s Team Average: ' + teamMike);
console.log('Mary\'s Team Average: ' + teamMary);

switch (true) {
    case teamJohn > teamMike:
        winner = ("John's team will defeat Mike's team");
        break;
    case teamMike > teamJohn:
        winner = ("Mike's team will defeat John's team");
        break;
    default:
        winner = "John's and Mike's teams will tie the game";
}

console.log(winner);

if (winner == "John's and Mike's teams will tie the game") {
    if (teamMary > teamJohn) {
        console.log("Mary's team will defeat Mike's team and John's team");
    } else if (teamMary == teamJohn) {
        console.log("The 3 teams will tie the game");
    } else {
        console.log("John's and Mike's teams will tie the game but both will defeat Mary's teams");
    }
} else if (winner == "John's team will defeat Mike's team") {
    if (teamMary > teamJohn) {
        console.log("Mary's team will defeat Mike's and John's team");
    } else if (teamMary == teamJohn) {
        console.log("John's and Mary's teams will tie the game but both will defeat Mike's teams");
    } else {
        console.log("John's team will defeat Mike's team and Mary's team");
    }
} else if (winner == "Mike's team will defeat John's team") {
    if (teamMary > teamMike) {
        console.log("Mary's team will defeat Mike's and John's team");
    } else if (teamMary == teamMike) {
        console.log("Mike's and Mary's teams will tie the game but both will defeat John's teams");
    } else {
        console.log("Mike's team will defeat John's team and Mary's team");
    }
}