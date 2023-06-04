// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var includeLower = window.confirm("Include lower-case letters?");
  var includeCaps = window.confirm("Include capital letters?");
  var includeNum = window.confirm("Include numbers?");
  var includeSymbols = window.confirm("Include symbols?");

}

