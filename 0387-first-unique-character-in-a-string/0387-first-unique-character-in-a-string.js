/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let queue = [];
    let store = [];
    
    for (let i = 0; i < s.length; i ++) {
        let ind = queue.indexOf(s[i])
        if (!store.includes(s[i])) {
            queue.push(s[i])
            store.push(s[i])
        } else if (store.includes(s[i]) && !queue.includes(s[i])) {
            continue;
        } else {
            queue.splice(ind,1)
        }
    }
    
    let firstNonRepeat = s.indexOf(queue[0])
    
    if (!queue.length) {
        return -1;
    } else {
        return firstNonRepeat
    }
    
};