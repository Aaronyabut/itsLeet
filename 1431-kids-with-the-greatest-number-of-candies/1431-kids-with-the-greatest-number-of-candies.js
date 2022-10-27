/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 * I: array of int, int
 * O: arrayo of booleans
 * C: given 
 * E: 
 */
var kidsWithCandies = function(candies, extraCandies) {
  let most = Math.max(...candies);
  let ifGreater = [];

  for (let kid of candies) {
    if (kid + extraCandies >= most) {
      ifGreater.push(true);
    } else {
      ifGreater.push(false);
    }
  }

  return ifGreater;
};