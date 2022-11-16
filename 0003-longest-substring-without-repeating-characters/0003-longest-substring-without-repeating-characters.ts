function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;
  let first:number = 0;
  let last:number = 1;
  let max:number = -Infinity;

  while (last <= s.length) {
    let currSubstring:string = s.substring(first, last);
    let included = currSubstring.includes(s[last]);
    let currentMax = currSubstring.length;
    if (!included) {
      last ++;
    } else if (included) {
      first ++;
    } else {
      last ++;
    }
    max = Math.max(max,currentMax);
  }
  return max;
};