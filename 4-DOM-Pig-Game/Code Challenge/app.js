/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. 
- After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

YOUR 3 CHALLENGEs
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn

*/

var scores, roundScore, activePlayer, gamePlaying, previousDice, maxScore;

init();

// Anonymous Function = It doesn't have a name, it can't be used anywhere else but only here
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {

        // 1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1;

        // Challenge 1 - Two 6 in a row
        if (previousDice === 6 && dice === 6) {
            alert('Two 6\'s in a row, you loose everything!')
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            previousDice = 0;
            nextPlayer();            
        } else {
            previousDice = dice;
        
            // 2. Display the result
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png';
            
    
            // 3. Update the round score IF the rolled number was NOT a 1
            if (dice !== 1) {
                // Add Score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                // Next Player
                nextPlayer();
            }
        }
    } 
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // Challenge 02

        var input = document.querySelector('#maxScoreTxt').value;

        if (input) {
            maxScore = input;
        } else {
            maxScore = 100;
        }

        // Check if Player won the game
        if (scores[activePlayer] >= maxScore) {
            document.querySelector('#name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next Player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // Switching Next PLayer
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  // Using a Ternary Operator
    roundScore = 0;

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
};


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    previousDice = 0;

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
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('maxScoreTxt').textContent = '';

    // WE ALWAYS NEED TO REMOVE APPLIED CLASSES for styles

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');

    // Now I add again the active class
    document.querySelector('.player-0-panel').classList.add('active');

}
