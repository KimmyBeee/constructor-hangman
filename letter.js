console.log("letter is loaded");

var WordInPlay = require("./word.js");

var CheckedLetterWord = function(letter)	{
	this.letter = letter.toLowerCase();
	this.correctLetterGuess === false;
	
	this.showLetter = function()	{
		for (l = 0; l < chosenWord.length; l++)	{
			if (chosenWord[l] === this.letter) 	{
				this.correctLetterGuess === true;
			}
		}
		if (this.correctLetterGuess)	{
			console.log(this.letter);
		} else	{

		}
	}



module.exports = ;
 
//This constructor needs to take guessed letter input and make a new object depending on if
//the letter is in the word or not
	

//var ??? = new CheckedLetterWord(userGuess);
//???.