function reverseOnlyLetters(s: string): string {
  let strArr = s.split('');

  // first variable
  let i = 0;
  // last variable
  let j = strArr.length - 1;


  // while loop,first is less than or equal to last
  while (i <= j) {
    // first currrent variable
    let firstCurrChar = strArr[i];
    // last currrent variable
    let lastCurrChar = strArr[j];
    // if first char at strArr is a-zA-Z
    if (/[a-zA-Z]/.test(firstCurrChar) && /[a-zA-Z]/.test(lastCurrChar)) {
      // current last char is first char
      strArr[i] = lastCurrChar;
      // increment first ind
      i ++;
      // current first char is last char
      strArr[j] = firstCurrChar;
      // increment last ind
      j --
    } else if (!/[a-zA-Z]/.test(firstCurrChar)) {
      // increment first ind
      i ++;
    // else 
    } else if (!/[a-zA-Z]/.test(lastCurrChar)) {
      // increment last ind
      j --;
    }
  }

  // return array then join
  return strArr.join('')
};