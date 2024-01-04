/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let i = 0;
  let j = i+1;
  
  while (j !== undefined) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
          return [i,j];
      } else if (nums[j]===undefined) {
          i++;
          j=i+1;
      } else {
          j++;
      }
  }
};