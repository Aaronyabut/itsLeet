/**
 * @param {string} s
 * @return {boolean}
 * I: String
 * O: Boolean
 * C: s consists only of printable ASCII characters.
 * E: if alphaNum is an empty string return true
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  let first = 0;
  let last = s.length-1;

  let palindrome = true;

  while (first < last) {
    if (!/[a-z0-9]/.test(s[first])) {
      first ++;
    } else if (!/[a-z0-9]/.test(s[last])) {
      last --;
    } else if (s[first] !== s[last]) {
      return false;
    } else {
      first ++;
      last --;
    }
  }
  return palindrome
};

  // // create an empty string variable
  // let alphaNum = '';
  
  // // loop through the string
  // for (char of s) {
  //   char = char.toLowerCase();
  //   // if current value is a-z0-9 
  //   if (/[a-z0-9]/.test(char)) {
  //     // add to the empty string
  //     alphaNum += char;
  //   }
  // }
  
  
  // // create a reverse string variable
  // const reverseAlphaNum = alphaNum.split('').reverse().join('')
  // // console.log('REVERSE ALPHA =', reverseAlphaNum)
  
  // // if both strings match
  // if (alphaNum === reverseAlphaNum) {
  //   // return true
  //   return true;
  // }
  
  // // return false
  // return false;