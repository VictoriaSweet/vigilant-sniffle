const generateBtn = document.querySelector("#generate");


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function getRandomCharacterFromArray(array) {
  const index = getRandomInt(array.length); // 0 to (array length - 1)
  return array[index];
}

function generatePassword() {
  let password = "";
  const lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '/', '|', '"', '.', ',', '?', '<', '>'];
  var length = prompt("Password must be between 8 and 128 characters in length.");
  if (length < 8 || length > 128) {
    alert("Your password does not meet the criteria");
    return password;
  }

  let hasLowercase = confirm("Do you want lowercase?");
  let hasUppercase = confirm("Do you want uppercase?");
  let hasNumeric = confirm("Do you want numbers?");
  let hasSpecialCharacters = confirm("Do you want special characters?");
  const atLeastOneCharacterTypeSelected =
    hasLowercase || hasUppercase || hasNumeric || hasSpecialCharacters;
  if (!atLeastOneCharacterTypeSelected) {
    alert("You did not select at least one character type.");
    return password;
  }

  for (let i = 0; i < length; i++) {

    if (hasLowercase) {
      const letter = getRandomCharacterFromArray(lowercaseCharacters);
      password = password + letter;

    }
    if (password.length == length) {
      return password;
    }


    if (hasUppercase) {
      const letter = getRandomCharacterFromArray(uppercaseCharacters);
      password = password + letter;

    }
    if (password.length == length) {
      return password;
    }

    if (hasNumeric) {
      const letter = getRandomCharacterFromArray(numericCharacters);
      password = password + letter;

    }
    if (password.length == length) {
      return password;
    }

    if (hasSpecialCharacters) {
      const letter = getRandomCharacterFromArray(specialCharacters);
      password = password + letter;

    }
    if (password.length == length) {
      return password;
    }

  }
  return password
}


function writePassword() {
  // an alert here that tells users to decide their prompts)
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//event listener to generate button
generateBtn.addEventListener("click", writePassword);