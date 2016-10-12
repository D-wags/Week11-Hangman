module.exports = function(letter, word) {
	this.guessed = [],
	this.letter = letter,

	this.showLetter = function(word, hiddenWord) {
		userGuessIndex = word.indexOf(this.letter);
		for (var i = 0; i < word.length; i++) {
			if (word[i] == this.letter) {
				hiddenWord = hiddenWord.split("");
				hiddenWord[i] = word[i];
				hiddenWord = hiddenWord.join("");

			}
		}
			return hiddenWord;
			
	}
}