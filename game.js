console.log("game is loaded");

var Letter = require("./letter.js");
var inquirer = require("inquirer");

var wordBank = ["prototype", "javascript", "variable", "object", "element", "constructor"];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(chosenWord);

var userGuess = "";
var usedLetters = [];
var guessesLeft = 12;
var badGuesses = [];










