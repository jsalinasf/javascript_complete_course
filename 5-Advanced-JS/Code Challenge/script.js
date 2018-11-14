// Coding Challenge: Advanced JS
(function() {
    var questionsArr = [];
    var chosenQuestion,question01,question02,question03,userInputText,userInputNumber, score;

    function pickRandomQuestion() {
        return Math.floor((Math.random() * questionsArr.length));
    }

    var Question = function(questionToAsk,answers,correctAnswer) {
        this.questionToAsk = questionToAsk;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.printQuestion = function() {
        // Print question along with its answers
        console.log(this.questionToAsk);
        for (var i=0; i<this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.validateAnswer = function(userAnswer) {
        if (userAnswer === this.correctAnswer) {
            return true;
        }
    }

    // Build questions using the constructor and store them inside an array
    q01 = new Question('Was the Declaration of Independence signed on 1776?',['Yes','No'],0);
    q02 = new Question('Who won the World Cup in 2018?',['Germany','France','Croatia'],1);
    q03 = new Question('What is the largest country in South America?',['Argentina', 'Peru','Brazil','Colombia'],2);
    q04 = new Question('North, East, South and?',['Downtown','Cardinal','5\'o clock','West'],3)
    questionsArr = [q01, q02, q03, q04];
    score = 0;

    do {    
        // Choose Random Question
        chosenQuestion = pickRandomQuestion();

        // Log the question in the console along with its answers
        questionsArr[chosenQuestion].printQuestion();

        // Collect User's answer
        userInputText = prompt('Please select the correct answer (just type the number). Or type "exit" to quit');
        userInputNumber = parseInt(userInputText);

        // Validate if correct answer
        if (questionsArr[chosenQuestion].validateAnswer(userInputNumber)) {
            console.log('That\'s Right!');
            score += 1;            
        } else {
            console.log('Wrong Answer. Try again :)');
        }
        console.log('You current score is: ' + score);
        console.log('-----------------------------');
    } while (userInputText !== 'exit');
}) ();
