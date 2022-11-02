/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
 // NOT OPTIMIZED 
var arithmeticTriplets = function(nums, diff) {
  let count = 0;
  for (let i = 0; i < nums.length; i ++) {
    let currentCount = [nums[i]];
    for (let j = i+1; j < nums.length; j ++) {
      let currDiff = nums[j] - nums[i];
      if (currDiff === diff) {
        currentCount.push(nums[j])
        for (let p = j+1; p < nums.length; p ++) {
          let nextDiff = nums[p] - nums[j];
          if (nextDiff === diff) {
            currentCount.push(nums[p])
          } else if (nextDiff > diff) {
            break;
          }
        }
      } else if (currDiff > diff) {
        break;
      }
      if (currentCount.length === 3){
        count ++;
      }
    }
  }
  return count;
};