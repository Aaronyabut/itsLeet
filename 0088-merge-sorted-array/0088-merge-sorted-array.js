/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
      // if n is zero
  if (!n){
    // return nums1
    return nums1
  }

  // while n is postive
  while (n > 0) {
    // pop nums1
    nums1.pop()
    // n-1
    n--
  }
  // console.log(nums1)

  for (let i = 0; i < nums2.length; i ++) {
    nums1.push(nums2[i])
    // console.log("HELLO", nums1)
  }

  // // return sorted nums1
  nums1.sort((a,b)=>a-b)
  // nums1(nums2)
};