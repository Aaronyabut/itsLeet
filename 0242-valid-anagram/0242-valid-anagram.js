/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
      // create a s hashmap
  let hashOne = {};
  // create a t hashmap
  let hashTwo = {};

  // if the length of s is not equal to y
  if (s.length !== t.length) {
    // return false
    return false;
  }

  // iterate through s
  for (let i = 0; i < s.length; i ++) {
    // if object current value is undefined
    if (!hashOne[s[i]]) {
      // place current element of s into hash and set val to one
      hashOne[s[i]] = 1;
    // otherwise
    } else {
      // add 1
      hashOne[s[i]]++
    }
      
    // if object current value is undefined
    if (!hashTwo[t[i]]) {
      // place current element of s into hash and set val to one
      hashTwo[t[i]] = 1;
    // otherwise
    } else {
      // add 1
      hashTwo[t[i]]++;
    }
  }
  // console.log('HAsh', hashOne, hashTwo)
  // iterate through s
  for (let j = 0; j < s.length; j ++) {
    // if current value(hash 1) is does not equal to current value(hash 2)
    if (hashOne[s[j]] !== hashTwo[s[j]]) {
      // return false
      return false;
    }
  }
  // return true
  return true;
};