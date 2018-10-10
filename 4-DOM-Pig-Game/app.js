/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. 
- After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;


// You can use querySelector to write text to elements
// Pay special attention to the difference between textContent and innerHTML. The last one allows me to pass HTML tags
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// You can use querySelector to read text from elements
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// You can use querySelector to change CSS properties
document.querySelector('.dice').style.display = 'none';

// In here I use getElementById to select other elements. This one is faster but only works with ID's
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



// Anonymous Function = It doesn't have a name, it can't be used anywhere else but only here
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    

    // 3. Update the round score IF the rolled number was NOT a 1

});
