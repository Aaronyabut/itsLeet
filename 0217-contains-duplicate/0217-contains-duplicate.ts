function containsDuplicate(nums: number[]): boolean {
  // create a hash map
  
  // iterate over the array
    // if current value as key is undefined it equals one otherwise it increments
    // if current value as key's value is equal to two return true
  
  // return false
  
  let hash:object = {}
  let num:number;
  
  for (let i = 0; i < nums.length; i++) {
    num = nums[i]
    
    //hash[num] ? return true : hash[num] = 1
    
    if (hash[num]) {
      return true
    } else {
      hash[num] = 1
    }
    
  }
  
  return false;
  
  
};