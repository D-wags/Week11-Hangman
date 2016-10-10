module.exports = function(letter, word) {
	this.guessed = [],
	this.letter = letter,

	this.showLetter = function(word) {
		userGuessIndex = word.indexOf(this.letter);
		var hide = word;
		for (i=0; i < word.length; i++) {
			if (word[i] === this.letter) {
				hide = hide.split("");
				hide[i] = userGuess;
				hide = hide.join("");

			}
		}	
	}
}