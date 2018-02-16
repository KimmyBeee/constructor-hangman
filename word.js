

// var Word = function(current, hidden)	{

// }

//assign function generateWord using prototype
Word.prototype.generateWord = function()	{
	var wordBank = ["prototype", "javascript", "variable", "object", "element", "constructor"];
	var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log(chosenWord);
	chosenWord.split("");
	console.log(chosenWord)

}

var test = new UserSearch("Kimmy", "Aurora, MN");
test.getWeather();