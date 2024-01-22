/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let y = x.toString();
    
    y = y.split("").reverse().join("");
    y = Number(y);
    
    return x === y
    
    
    
    console.log(typeof y, "hello m8")
};