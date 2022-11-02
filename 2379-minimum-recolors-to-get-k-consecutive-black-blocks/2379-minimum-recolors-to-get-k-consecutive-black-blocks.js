/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
  let minRecolor = Infinity;

  for (let i = 0; i < blocks.length; i ++) {
    let blackBoxCount = 0, whiteBoxCount = 0;
    for (let j = i; j < blocks.length; j ++) {
      if (blocks.charAt(j) === 'B') blackBoxCount++
      else {
        blackBoxCount ++
        whiteBoxCount ++
      }
      if (blackBoxCount === k) {
        minRecolor = Math.min(minRecolor, whiteBoxCount);
        break;
      }
    }
  }

  return minRecolor;
};







