console.log("word is loaded");


var ChosenWord = function(word)	{

	this.word = word;
	this.letters =[];
	this.hidAndGuessed = [];

	this.makeWordArray = function()	{
		this.letters = word.split("");
		this.letterCount = this.letters.length;

		console.log(this.letters);
	
		for (var i = 0; i < this.letterCount; i++) {
			this.hidAndGuessed.push(" __ ");	
		};
		console.log(this.hidAndGuessed);
	};
};

module.exports = ChosenWord;

var testWord = new ChosenWord("constructor");
testWord.makeWordArray();
