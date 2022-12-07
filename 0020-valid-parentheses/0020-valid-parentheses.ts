function isValid(s: string): boolean {
  let q = [];
  const hash = {
    '{':'}',
    '(':')',
    '[':']'
  };
  if (s.length % 2 === 1) {
    return false;
  }

  for (let i = 0; i < s.length; i ++) {
    if (hash[s[i]]) {
      q.push(s[i]);
    } else if (s[i] === hash[q[q.length-1]]) {
      q.pop()
    } else {
      return false
    }
  }
  if (!q.length) {
    return true;
  } else {
    return false;
  }

};