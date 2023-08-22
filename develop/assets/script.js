// Assignment Code
const generateBtn = document.querySelector("#generate");

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
function generatePassword() {
  let password = "";

  const length = 8;
  const lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const numericCharacters = ['1','2','3','4','5','6','7','8','9','0'];
  const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','/','|','"','.',',','?','<','>'];

  // make a prompt that asks if they want lowercase
  let hasLowercase = confirm("Do you want lowercase?");
  
  let hasUppercase= confirm("Do you want uppercase?");
  let hasNumeric = confirm("do you want numbers?");
  let hasSpecialCharacters = confirm("do you want special characters?");

  const atLeastOneCharacterTypeSelected =
    hasLowercase || hasUppercase || hasNumeric || hasSpecialCharacters;

  if (!atLeastOneCharacterTypeSelected) {
    alert("You did not select at least one character type.");
  }

  return password;
}


// Write password to the #password input
function writePassword() {
  // create an alert here that tells users to decide their prompts
  alert("Please select character type requirements for password")
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);