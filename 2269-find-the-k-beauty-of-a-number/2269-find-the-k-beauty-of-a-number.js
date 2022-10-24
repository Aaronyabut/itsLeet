/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 * I: string, int
 * O: int
 * C: n/a
 * E: 
 */
var divisorSubstrings = function(num, k) {
  // create a k beauty counter
  let kBeautyCounter = 0;
  // create current substring 
  let currentSubstring = '';
  const numStr = num.toString()
  
  // iterate num to add to current substring max leng is k
  for (let i = 0; i < k; i ++) {
    currentSubstring += numStr[i];
  }

  // iterate through the num(string) starting at k
  for (let j = k; j < numStr.length; j ++) {
    // if current substr is divisble to num
    if (num % Number(currentSubstring) === 0) {
      // increment counter
      kBeautyCounter ++;
    }
    // remove first character of the string 
    currentSubstring = currentSubstring.slice(k - (k - 1))
    // add the current character to the string 
    currentSubstring += numStr[j]
  }

  if (num % Number(currentSubstring) === 0) {
    // increment counter
    kBeautyCounter ++;
  }
  // return counter
  return kBeautyCounter;

};