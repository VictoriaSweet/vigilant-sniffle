// Assignment Code
const generateBtn = document.querySelector("#generate");


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function getRandomCharacterFromArray(array) {
  const index = getRandomInt(array.length); // 0 to (array length - 1)
  return array[index];
}

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
function generatePassword() {
  let password = [];
  let letter = [];
  const lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const numericCharacters = ['1','2','3','4','5','6','7','8','9','0'];
  const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','/','|','"','.',',','?','<','>'];
 // let  CharacterCount = >8 , <128
  var length = prompt("Password must be between 8 and 128 characters in length.");
  if (length < 8 || length > 128) {
  alert("Your password does not meet the critia");
   return null;
 }

  // make a prompt that asks if they want lowercase
  let hasLowercase = confirm("Do you want lowercase?");
  let hasUppercase= confirm("Do you want uppercase?");
  let hasNumeric = confirm("Do you want numbers?");
  let hasSpecialCharacters = confirm("Do you want special characters?");
  const atLeastOneCharacterTypeSelected =
   hasLowercase || hasUppercase || hasNumeric || hasSpecialCharacters;
  if (!atLeastOneCharacterTypeSelected) {
    alert("You did not select at least one character type.");
    return null;
  }
  
  //let characterCount= prompt("please select what character count is required. Min 8  Max 128");

  if (hasLowercase) {
    letter.push(getRandomCharacterFromArray (lowercaseCharacters));
    console.log(letter)
    console.log(  password.concat(letter))
    password=password.concat(lowercaseCharacters)
    console.log(password)
  
  }

  if (hasUppercase) {
    const letter = getRandomCharacterFromArray(uppercaseCharacters);
    console.log(letter)
    console.log(  password.concat(letter))
    password=password.concat(letter)
    console.log(password)
  }

  if (hasNumeric) {
    const letter = getRandomCharacterFromArray(numericCharacters);
    console.log(letter)
    console.log(  password.concat(letter))
    password=password.concat(letter)
    console.log(password)
  }

  if (hasSpecialCharacters) {
    const letter = getRandomCharacterFromArray(specialCharacters);
    console.log(letter)
    console.log(  password.concat(letter))
    password=password.concat(letter)
    console.log(password)
  }
var final = []
var options = {
  length:length
}
return options
//do a for loop on length, in the logic input the possibility of password
for (let i = 0; i < options.length; i++) {
  var possible = getRandomCharacterFromArray(password);
  final.push(possible)
}

}


// Write password to the #password input
function writePassword() {
  // create an alert here that tells users to decide their prompts
 // alert("Please select character type requirements for password")
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);