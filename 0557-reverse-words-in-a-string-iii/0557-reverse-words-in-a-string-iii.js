/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let sArray = s.split(' ');
  let reversed = []

  for (let word of sArray) {
    reversed.push(word.split('').reverse().join(''));

  }
  return reversed.join(' ');
};