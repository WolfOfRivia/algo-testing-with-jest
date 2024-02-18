// Solution 1
// function palindrome(str) {
//   const pal = str.split('').reverse().join('');
//   // if(str === pal) {
//   //   return true;
//   // } else {
//   //   return false;
//   // } // Note to self: You don't have to write return booleans this way AJ just simply the line below also works
//   return pal === str;
// }

// Solution 2
function palindrome(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1]
  })
}

module.exports = palindrome;