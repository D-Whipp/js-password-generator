// Assignment code here
// I need some random generators for lowercase, uppercase, numeric, and special character values
// first let's focuse on lowercase
var getRanLowercase = function () {
  // need an array to hold the values I'm looking for
  lowercaseArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // now I need a way to grab one of these letters randomly
  return lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)];
};

// Cool, now I need to do the same thing for the other characters
// Random uppercase generator
var getRanUppercase = function () {
  uppercaseArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)];
};

// Random number generator
var getRanNumber = function () {
  numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return numbersArr[Math.floor(Math.random() * numbersArr.length)];
};

// Random symbol generator
var getRanSymbol = function () {
  symbolArr = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  return symbolArr[Math.floor(Math.random() * symbolArr.length)];
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
