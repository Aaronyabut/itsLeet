function divisorSubstrings(num: number, k: number): number {
  let kBeautyCounter = 0;
  let currentSubstring = '';
  const numStr = num.toString()
  
  for (let i = 0; i < k; i ++) {
    currentSubstring += numStr[i];
  }

  for (let j = k; j < numStr.length; j ++) {
    if (num % Number(currentSubstring) === 0) {
      kBeautyCounter ++;
    }
    currentSubstring = currentSubstring.slice(k - (k - 1))
    currentSubstring += numStr[j]
  }

  if (num % Number(currentSubstring) === 0) {
    kBeautyCounter ++;
  }
 
  return kBeautyCounter;
};