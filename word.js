console.log("word is loaded");

var WordInPlay = function(word)	{

	this.word = word;
	this.letters = [];
	this.hidAndGuessed = [];

	this.makeWordArray = function()	{
		this.letters = word.split("");
		this.letterCount = this.letters.length;
	
		for (var i = 0; i < this.letterCount; i++) {
			this.hidAndGuessed.push(" __ ");
			var shownWord = this.hidAndGuessed.join(" ");	
		};
		console.log(shownWord);
		//put this here or in game.js
		//console.log("You're word is:" + "\n" + shownWord)	
	};
	this.makeWordArray();
};

module.exports = WordInPlay;

// var testWord = new WordInPlay("constructor");
		// testWord.makeWordArray();


//goes in game.js var ??? = new WordInPLay(chosenWord);
//???.makeWordArray
//console.log("You're word is:" + "\n" + shownWord)