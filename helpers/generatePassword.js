function generatePassword() {
  const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_+{}[]';

  let password = '';

  // Add at least one capital letter for the specific website
  const randomCapitalLetter = capitalLetters.charAt(Math.floor(Math.random() * capitalLetters.length));
  password += randomCapitalLetter;

  // Generate the rest of the password
  const allChars = capitalLetters + lowerCaseLetters + numbers + specialCharacters;
  for (let i = 0; i < 11; i++) {
    const randomChar = allChars.charAt(Math.floor(Math.random() * allChars.length));
    password += randomChar;
  }

  // Shuffle the characters in the password
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;



}

module.exports = generatePassword;
