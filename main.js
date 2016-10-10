var Word = require('./word.js');
var Letter = require('./letter.js');
var inquirer = require('inquirer');

var letterGuess;
var chances = true;

startGame.getWord();
startGame.hideWord();


function playGame() {
	var startGame = new Word();
	
	while (chances = true) {

		inquirer.prompt([
		{
			name: "guess",
			message: "Guess a letter: "
		}
		]).then(function(guess) {
			startGame.guesses -= 1;
			// here you must check letter!!
			var newLetter = new Letter(guess.name);
			
			if (startGame.checkWord() == true) {
				console.log("You Win!!");
				chances = false;
				break;
			}

			else if (startGame.guesses == 0) {
				var letter = guess.name;
				chances = false;
				console.log("You Lose!");
				break;
			}

			else {
				playGame();

			} 
		}
	}

}

playGame();
