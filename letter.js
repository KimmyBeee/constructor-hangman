console.log("letter is loaded");

var WordInPlay = require("./word.js");

var CheckedLetterWord = function(letter)	{
	this.letter = letter.toLowerCase();
	this.correctLetterGuess === false;
	var displayWord = new WordInPlay("constructor");
	var updatedWord = "";

	// console.log(displayWord);
	// console.log(displayWord.letters);
	
	this.showLetter = function()	{
		
		for ( var l = 0; l < displayWord.hidAndGuessed.length; l++)	{
		
			if (displayWord.letters[l] === letter) 	{
				this.correctLetterGuess = true;
				};

			if (this.correctLetterGuess) {
				displayWord.hidAndGuessed[l] = letter;
				updatedWord = displayWord.hidAndGuessed.join(" ");
				this.correctLetterGuess = false;
			};
			
		};
		console.log(updatedWord);
	};

	// this.displayWord.hidAndGuessed.push(new WordInPlay());
	// 			console.log();

};

module.exports = CheckedLetterWord;

var testDisplay = new CheckedLetterWord("t");
testDisplay.showLetter();

//need to be followed with...
//console.log( )

//this.letter.push(badGuesses);
				// this.letter.push(usedLetters);
				// console.log("Nope! Try again");


