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
// TWO POINTER //

//   let sArr = s.split(' ');
//   let revWordStr = []
  
//   for (let i = 0; i < sArr.length; i ++) {
//     let first = 0;
//     let last = sArr[i].length-1;
//     sArr[i] = sArr[i].split('')
//     while (first <= last) {
//       let firstChar = sArr[i][first];
//       let lastChar = sArr[i][last];
//       if (firstChar !== lastChar) {
//         sArr[i][first] = lastChar;
//         sArr[i][last] = firstChar;
//       }
//       first++;
//       last --;
//     }
//     revWordStr.push(sArr[i].join(''));
//   }
//   return revWordStr.join(' ');