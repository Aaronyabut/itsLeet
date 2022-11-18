function characterReplacement(s: string, k: number): number {
    let left = 0, right = 0, max = 0, mostFreq = 0;
    let freqHash = {};
    
    for (let right=0;right<s.length;right++) {
        freqHash[s[right]] = freqHash[s[right]] + 1 || 1;
        mostFreq = Math.max(mostFreq, freqHash[s[right]]);
        while(right - left + 1 - mostFreq > k) {
            freqHash[s[left]]-=1;
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    
    return max;    
};