console.log("game is loaded");

var Letter = require("./letter.js");

var wordBank = ["prototype", "javascript", "variable", "object", "element", "constructor"];
var word = wordBank[Math.floor(Math.random() * wordBank.length)];

var userGuess = "";
var usedLetters = [];
var guessesLeft = 15;
var badGuesses = [];






