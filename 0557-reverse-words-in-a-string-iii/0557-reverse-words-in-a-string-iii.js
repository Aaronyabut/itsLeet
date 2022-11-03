/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let reverseStr = '';
  
  for (let i = s.length - 1; i >= 0; i --) {
    reverseStr += s[i];
  }
  reverseStr = reverseStr.split(' ');
  reverseStr = reverseStr.reverse();
  reverseStr = reverseStr.join(' ');
  return reverseStr;
};