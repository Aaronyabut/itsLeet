/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 total 
 min val
 
 */
var minimumDifference = function(nums, k) {
  if (k === 1) return 0;
  let lowest = Infinity;
  nums = nums.sort((a,b) => a-b);

  for (let i = 0; i <= nums.length-k; i ++) {
    lowest = Math.min(lowest, nums[i+k-1] - nums[i])
  }

  return lowest
};