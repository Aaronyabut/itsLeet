function sortedSquares(nums: number[]): number[] {
  let squaredValues:number[] = [];
  
  for (let num of nums) {
    squaredValues.push(num*num)
  }
  
  return squaredValues.sort((a,b) => a-b);
};