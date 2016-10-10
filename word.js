module.exports = function() {
	this.words = ["chromium", "manganese", "tungsten", "molybdenum", "rubidium", "xenon", "potassium", "fluorine", "antimony", "hydrogen", "nitrogen", "zirconium", "thorium", "arsenic", "selenium", "bismuth", "polonium", "neptunium", "plutonium", "platinum", "iridium"],
	this.word = "",
	this.hiddenWord = "",
	this.guesses = +10,

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
		win = true;
			for(i=0; i < hide.length; i++){
				if (hide[i] == "-") {
					win = false;	
			    }
			}
			return win;
		}
	
	}