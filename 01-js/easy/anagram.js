/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const cleaned1 = str1.replace(/\s/g, '').toLowerCase();
  const cleaned2 = str2.replace(/\s/g, '').toLowerCase();
  
  const sorted1 = [...cleaned1].sort().join('');
  const sorted2 = [...cleaned2].sort().join('');

  return sorted1 === sorted2;
}

module.exports = isAnagram;
