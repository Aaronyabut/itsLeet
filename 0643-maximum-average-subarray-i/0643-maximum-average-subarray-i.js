/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  if (nums.length === 1) return nums[0];
  let sum = 0;

  for (let j = 0; j < k; j ++) {
    sum += nums[j];
  }
  
  let maxAverage = sum/k;
  let currSum = sum;

  for (let i = k; i < nums.length; i ++) {
    currSum += nums[i];
    currSum -= nums[i-k];
    let currAverage = currSum/k;
    maxAverage = Math.max(maxAverage, currAverage);
  }

  return maxAverage;
};