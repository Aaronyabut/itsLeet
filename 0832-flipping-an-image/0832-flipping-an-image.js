/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  let flippedAndInverted = [];

  for (let i = 0; i < image.length; i ++) {
    let flip = image[i].reverse();
    let inverted = [];
    for (let j = 0; j < flip.length; j ++) {
      flip[j] === 1 ? inverted.push(0) : inverted.push(1); 
    }
    flippedAndInverted.push(inverted);
  }

  return flippedAndInverted;
};