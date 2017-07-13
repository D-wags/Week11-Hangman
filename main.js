
// get npm modules 
var Word = require('./word.js');
var Letter = require('./letter.js');
var inquirer = require('inquirer');
var letterGuess;

console.log("");
console.log("----------------------------------------------------");
console.log("YOU ARE PLAYING PERIODIC TABLE HANGMAN NOW!!!");
console.log("----------------------------------------------------");
console.log("");


// initialize and display word to be guessed
var startGame = new Word();
startGame.getWord();
startGame.hideWord();


// function recursively processes user input and progresses game
function playGame() {
	
	// while (chances = true) {

		inquirer.prompt([

		{
			name: "guess",
			message: "Guess a letter: "
		}

		]).then(function(guess) {
			
			// create letter object
			var newLetter = new Letter(guess.guess);
			if (startGame.guessed.indexOf(newLetter.letter) == -1) {
				startGame.guessed.push(newLetter.letter);
			}
			else {
				console.log("");
				console.log("");
				console.log("You already guessed that, try again");
				console.log("");
				console.log("");
				playGame();
				return;
			}
			
			startGame.hiddenWord = newLetter.showLetter(startGame.word, startGame.hiddenWord);
			

			//continue conditional
			if (startGame.checkWord() == true) {
				console.log("");
				console.log("Your word is " + startGame.hiddenWord + "!");
				console.log("");
				console.log("You Win - Youre a regular Dimitri Mendeleev!!");
				console.log("");
			}

			// lose conditional
			else if (startGame.guesses <= 0) {
				console.log("");
				console.log("Aw, snap son, you lose!");
				console.log("Your word was " + startGame.word);
				console.log("");
			}

			// win conditional
			else {

				console.log("");
				console.log("Your word     ->  " + startGame.hiddenWord);
				console.log("Guesses left  ->  " + startGame.guesses);
				console.log("Guessed       ->  " + startGame.guessed);
				console.log("");

				// recurses game if a win/loss event did not occur
				playGame();

			} 
			
		});
	// }

}
// call playGame
playGame();