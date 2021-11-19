// generate password on click
document.getElementById("generate").onclick = function () {
  const length = document.querySelector("#pwlength").value;
  const lowercase = document.querySelector("#lowercase").checked;
  const uppercase = document.querySelector("#uppercase").checked;
  const numbers = document.querySelector("#numbers").checked;
  const specialCharacters = document.querySelector("#symbol").checked;
  const password = generatePassword(lowercase, uppercase, numbers, specialCharacters, length);
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
};


function generatePassword(lowercase, uppercase, numbers, specialCharacters, length) {
  let generatedPassword = "";
  const charTypes = {
    "lowercase": "abcdefghijklmnopqrstuvwxyz",
    "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "numbers": "0123456789",
    "specialCharacters": "!@#$%^&*_+{}[]()/\'\"`~,;:.<>"
  };
  const typesCount = lowercase + uppercase + numbers + specialCharacters;
  const typesArr = {
    "lowercase": lowercase,
    "uppercase": uppercase,
    "numbers": numbers,
    "specialCharacters": specialCharacters
  };
  if (typesCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += typesCount) {
    for (const [type, value] of Object.entries(typesArr)) {
      if (value) {
        const index = Math.floor(Math.random() * charTypes[type].length);
        generatedPassword += charTypes[type][index];
      }
    }
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

// copy password to clipboard
document.getElementById("copy").onclick = function () {
  var copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
}

for (let index = 8; index < 51; index++) {
  let option = document.createElement("option");
  option.value = index;
  option.text = index;
  document.getElementById("pwlength").appendChild(option);
  console.log(index);
}