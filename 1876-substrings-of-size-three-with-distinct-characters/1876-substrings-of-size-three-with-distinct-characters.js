/**
 * @param {string} s
 * @return {number}
 * I: string
 * O: num
 * C: input in lowercase
 * E: 
 */
var countGoodSubstrings = function(s) {
  let goodSubCount = 0;

  for (let p = 2; p < s.length; p ++) {
    let last = s[p];
    let mid = s[p-1];
    let first = s[p-2];

    if (first !== mid && first !== last && mid !== last) {
      goodSubCount ++;
    }
  }
  return goodSubCount;
};