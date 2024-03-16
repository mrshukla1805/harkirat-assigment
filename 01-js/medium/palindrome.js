/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const sanitizedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for (let i = 0; i < sanitizedString.length / 2; i++) {
    if (sanitizedString[i] !== sanitizedString[sanitizedString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
