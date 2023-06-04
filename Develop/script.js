// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Random string generator
function generatePassword() {
  var passwordLength = window.prompt("How long would you like your password?");
  var includeLower = window.confirm("Include lower-case letters?");
  var includeCaps = window.confirm("Include capital letters?");
  var includeNum = window.confirm("Include numbers?");
  var includeSpecial = window.confirm("Include special characters?");
  var includedCharacters = [];
  var stringOut = [];

  if (includeLower) {
    includedCharacters = includedCharacters.concat(lowerChar);
  }
  if (includeCaps) {
    includedCharacters = includedCharacters.concat(upperChar);
  }
  if (includeNum) {
    includedCharacters = includedCharacters.concat(numericChar);
  }
  if (includeSpecial) {
    includedCharacters = includedCharacters.concat(specialChar);
  }

  // console.log(includedCharacters);

  for (let index = 0; index < passwordLength; index++) {
    let randomIndex = Math.floor(Math.random() * includedCharacters.length);
    stringOut.push(includedCharacters[randomIndex]);
  }

  return stringOut.join('');
}

// Array of special characters to be included in password
var specialChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerChar = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperChar = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];