function longestOnes(nums: number[], k: number): number {
  let most:number = 0;
  
  for (let i = 0; i < nums.length; i ++) {
    let count:number = 0;
    let kLeft:number = k;
    let index:number = i;
    while (index < nums.length) {
      let slider:number = nums[index];
      if (slider === 1 && kLeft >= 0) {
        count++;
        index++;
      } else if (slider === 0 && kLeft > 0) {
        count++;
        index++;
        kLeft--;
      } else if (slider === 0 && kLeft === 0) {
        break;
      }
    }
    most = Math.max(most,count)
  }
  
  return most;
  
};