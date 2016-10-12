module.exports = function() {
	this.words = ["chromium", "manganese", "tungsten", "molybdenum", "rubidium", "xenon", "potassium", "fluorine", "antimony", "hydrogen", "nitrogen", "zirconium", "thorium", "arsenic", "selenium", "bismuth", "polonium", "neptunium", "plutonium", "platinum", "iridium"],
	this.word = "",
	this.hiddenWord = "",
	this.guesses = 10,
	this.win,

	this.getWord  = function() {
		var randNum = Math.floor(Math.random() * 22);
		this.word = this.words[randNum];
		console.log(this.word);
		return this.word;
	},

	this.hideWord = function() {
		var hide = '';
			for(var i = 0; i < this.word.length; i++) {
				hide += "-";
			}
			this.hiddenWord = hide;
			console.log(this.hiddenWord);
	
	},

	this.checkWord = function() {
			this.win = true;
			for(var i = 0; i < this.hiddenWord.length; i++){
				
				if (this.hiddenWord[i] == "-") {
					this.win = false;	
			    }
			}
			return this.win;
	}
	
}