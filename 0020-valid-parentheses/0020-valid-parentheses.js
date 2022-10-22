/**
 * @param {string} s
 * @return {boolean}
 * I: String
 * O: Boolean
 * C:
 * E:
 */
var isValid = function(s) {
  let q = [];
  const hash = {
    '{':'}',
    '(':')',
    '[':']'
  };
  if (s.length % 2 === 1) {
    return false;
  }

  // iterate through the string
  for (let i = 0; i < s.length; i ++) {
    // if hash[curr[i]]
    if (hash[s[i]]) {
      // push curr[i]
      q.push(s[i]);
    // else if curr[i] === hash[q[q.length-1]]
    } else if (s[i] === hash[q[q.length-1]]) {
      // Pop the last value of the arrayq.pop()
      q.pop()
    } else {
      // if its a closed bracket return false
      return false
    }
  }
  // if the length of the q === 0
  if (!q.length) {
    // return true
    return true;
  } else {
    // return fasle
    return false;
  }

};

/*
[ {( ]
{([)}] false
{([])} true
{([][])} true

*/