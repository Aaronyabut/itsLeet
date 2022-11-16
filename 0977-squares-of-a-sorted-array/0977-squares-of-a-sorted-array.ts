// function sortedSquares(nums: number[]): number[] {
//   let squaredValues:number[] = [];
  
//   for (let num of nums) {
//     squaredValues.push(num*num)
//   }
  
//   return squaredValues.sort((a,b) => a-b);
// };

function sortedSquares(nums: number[]): number[] {
  let squaredValues:number[] = [];
  
  for (let num of nums) {
    squaredValues.push(num*num)
  }
  
  let first:number = 0;
  let last:number = squaredValues.length-1;
  
  while (first <= last) {
    let currFirst = squaredValues[first];
    let currLast = squaredValues[last];
    
    if (last === first+1 && currFirst > currLast) {
      squaredValues[last] = currFirst;
      squaredValues[first] = currLast;
      first ++;
      last = squaredValues.length-1;
    } else if (last === first+1) {
      first ++;
      last = squaredValues.length-1;
    } else if (currFirst > currLast) {
      squaredValues[last] = currFirst;
      squaredValues[first] = currLast;
      last--;
    } else {
      last --;
    }
  }
  
  return squaredValues 
};