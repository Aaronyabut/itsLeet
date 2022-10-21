/**
 * @param {string} ransomeNote
 * @param {string} magazine
 * @return {boolean}
 * I: strings
 * O: boolean
 * C: I consists of lowercase letters
 * E:
 */
var canConstruct = function(ransomNote, magazine) {
  // create a hash table for ransomNote
  let ransomNoteChar = {};

  // create a for loop for ransomNote
  for (let i = 0; i < ransomNote.length; i ++) {
    // if current value in object key is undefined
    if (!ransomNoteChar[ransomNote[i]]) {
      // value is 1
      ransomNoteChar[ransomNote[i]] = 1;
    // otherwise
    } else {
      // increment by 1
      ransomNoteChar[ransomNote[i]] ++;
    }
  }
  
  // create for loop for magazine
  for (let j = 0; j < magazine.length; j ++) {
    // if current value in object key exists
    if (ransomNoteChar[magazine[j]]) {
      // decrement value
      ransomNoteChar[magazine[j]] --;
    }
  }

  // create a for in loop
  for (let char in ransomNoteChar) {
    // if current property's value is more than zero
    if (ransomNoteChar[char] > 0) {
      // return false
      return false;
    }
  }
  
  // return true
  return true;
};