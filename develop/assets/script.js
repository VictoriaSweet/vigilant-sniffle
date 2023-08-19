// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
function generatePassword() {
  let password = "444";
var length = 8 ; 
var  hasLowercase = false;
var  hasUppercase = false;
var  hasNumeric = false;
var  hasSpecialCharacters = false;

var atLeastOneCharacterTypeSelected = hasLowercase || hasUppercase || hasNumeric || hasSpecialCharacters ;

if (!atLeastOneCharacterTypeSelected){
    alert("You did not select at least one character type.")
}







  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
