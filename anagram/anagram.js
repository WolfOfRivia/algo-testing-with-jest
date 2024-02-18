// Essentially an anagram is when two words have the same number of characters and same number of occurances

function anagram(str1, str2) {
  const aCharMap = buildCharMap(str1);
  const bCharMap = buildCharMap(str2);

  // console.log(aCharMap);
  // console.log(bCharMap);

  // Cannot be an anagram if the words aren't the same length
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  // If any of the characters in each word do not match
  for (let char in aCharMap) {
    if(aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  // Othewise return true
  return true;
}

function buildCharMap(str) {
  const charMap = {}
  
  for(let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// anagram('dog', 'god');
/* returns
  { d: 1, o: 1, g: 1 }
  { g: 1, o: 1, d: 1 }

  for dog each character appears only one time, the same occurs for god

  btw you can test this by running node anagram/anagram.js in the terminal, just be sure to uncomment lines 7, 8, and 36
*/

module.exports = anagram;