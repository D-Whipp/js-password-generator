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

// Now I want to "house" all these functions in one place
// I'll use an object
var functionContainer = {
  lower: getRanLowercase,
  upper: getRanUppercase,
  number: getRanNumber,
  symbol: getRanSymbol,
};

// Now I want all of my prompts in one place
// but first I must validate lenPrompt and convert
// it to number using +
// I need a function that'll validate the length of user var lenPrompt
var validateLen = function (a) {
  while (isNaN(lenPrompt) || lenPrompt < 8 || lenPrompt > 128) {
    lenPrompt = +prompt(
      "How long would you like your password to be? MUST BE A NUMBER BETWEEN 8 AND 128!!!"
    );
    validateLen();
    return lenPrompt;
  }
  return lenPrompt;
};

var lenPrompt = validateLen();
var hasLower = confirm("Would you like to include lowercase?");
var hasUpper = confirm("Would you like to include uppercase?");
var hasNumber = confirm("Would you like to include numbers?");
var hasSymbol = confirm("Would you like to include symbols?");

var generatePassword = function (lower, upper, number, symbol, length) {
  var generatedPassword = "";
  var typesCount = lower + upper + number + symbol;
  var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (var i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      var funcName = Object.keys(type)[0];

      generatedPassword += functionContainer[funcName]();
    });
  }

  return generatedPassword.slice(0, length);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasNumber,
    lenPrompt
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
