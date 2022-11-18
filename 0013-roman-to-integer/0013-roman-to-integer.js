/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var data = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500, 
    M : 1000
    };
  var count = 0;
  for (var i = 0; i < s.length; i ++) {
    for (var key in data) {
      if (s[i] === key) {
        count += data[key]
        if (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
          count -= data.I * 2;
        } else if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
          count -= data.X * 2;
        } else if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
          count -= data.C * 2;
        }
      }
    }


  }
  return count
};