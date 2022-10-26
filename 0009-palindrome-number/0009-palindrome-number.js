/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  const trueVal = x.toString();
  const reverseVal = trueVal.split('').reverse().join('');
  let reverseInt = '';
  
  for (let i = 0; i < reverseVal.length; i ++) {
    if (/[0-9]/.test(reverseVal[i])) {
      reverseInt += reverseVal[i]
    }
  }

  if (trueVal === reverseInt) return true;
  return false
};


/**
 * @param {number} x
 * @return {boolean}

var isPalindrome = function(x) {
  // x = JSON.stringify
  var negative = false;
  if (x < 0) {
    negative = true;
  }
  var absValue = JSON.stringify(Math.abs(x))
  // var toString = JSON.stringify(absValue)
  var newString = ''
  
  for (var i = absValue.length - 1; i > -1; i --) {
    newString += absValue[i]
  }
  
  if (negative) {
    newString += '-'
  }
  newString = Number(newString)
  
  if (newString === x) {
    return true;
  }
  return false;
};

 */