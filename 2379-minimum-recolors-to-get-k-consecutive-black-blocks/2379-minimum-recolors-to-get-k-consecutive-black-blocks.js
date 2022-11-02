/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
  let createBB = '';

  for (let j = 0; j < k; j ++) {
    createBB += 'B';
  }
  if (blocks.indexOf(createBB) > 0) return 0;

  let minRecolor = Infinity;
  let currentBlock = '';
  let first = 0;
  let last = k

  while (last <= blocks.length) {
    currentBlock = blocks.substring(first,last)
    let wCount = 0;
    for (let p = 0; p < currentBlock.length; p ++) {
      if (currentBlock[p] === 'W') {
        wCount ++;
      }
    }
    minRecolor = Math.min(minRecolor, wCount)
    first ++
    last ++
  }

  return minRecolor;
};