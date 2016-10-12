var Word = require('./word.js');
var Letter = require('./letter.js');
var inquirer = require('inquirer');

var letterGuess;


var startGame = new Word();
startGame.getWord();
startGame.hideWord();


function playGame() {
	
	// while (chances = true) {

		inquirer.prompt([

		{
			name: "guess",
			message: "Guess a letter: "
		}

		]).then(function(guess) {

			
			console.log("hiddenWord is currently: " + startGame.hiddenWord);
			

			var newLetter = new Letter(guess.guess);
			// console.log(newLetter.letter);
			// console.log(startGame.hiddenWord);
			startGame.hiddenWord = newLetter.showLetter(startGame.word, startGame.hiddenWord);
			// console.log(startGame.hiddenWord);

			if (startGame.checkWord() == true) {
				console.log("You Win!!");
			}

			else if (startGame.guesses == 0) {
				console.log("You Lose!");
			}

			else {
				console.log("2");
				playGame();

			} 
			startGame.guesses -= 1;
		});
	// }

}

playGame();
