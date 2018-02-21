console.log("letter is loaded");

var WordInPlay = require("./word.js");

var CheckedLetterWord = function(letter)	{
	this.letter = letter.toLowerCase();
	this.correctLetterGuess === false;
	var displayWord = new WordInPlay("constructor");
	var updatedWord = "";
	var usedLetters = [];
	
	// console.log(displayWord);
	// console.log(displayWord.letters);
	this.checkLetter = function()	{
		for (var k =0; k < this.usedLetters.length; k++)	{
			console.log("after for");
			if (this.usedLetters[k] === letter)	{
				
				console.log("Hey, you already guessed that letter!");
				console.log(this.usedLetters);
				//call function asking for userGuess input
			} else	{
				this.showLetter();
			};
		};
	};
	
	this.showLetter = function()	{
		
		for ( var l = 0; l < displayWord.hidAndGuessed.length; l++)	{
		
			if (displayWord.letters[l] === letter) 	{
				updateArray = usedLetters.push(letter);
				console.log(usedLetters);
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

var testDisplay = new CheckedLetterWord("z");
testDisplay.showLetter();

//need to be followed with...
//console.log( )

//this.letter.push(badGuesses);
				// this.letter.push(usedLetters);
				// console.log("Nope! Try again");


