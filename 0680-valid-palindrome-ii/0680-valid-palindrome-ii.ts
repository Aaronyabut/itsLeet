function validPalindrome(s: string): boolean {
    if (isPalindrome(s, 0, s.length-1)) return true;
    
    let firstIdx: number = 0; // pointer 1
    let lastIdx: number = s.length-1; // pointer 2
    while (firstIdx <= lastIdx){
        if (s[firstIdx] === s[lastIdx]){
            firstIdx += 1;
            lastIdx -= 1;
            continue;
        }
        return isPalindrome(s, firstIdx+1, lastIdx) || isPalindrome(s, firstIdx, lastIdx-1);
    }

    // take to much time below
    // for (let i = 0; i < s.length; i += 1){
    //     if (isPalindrome(`${s.substr(0,i)}${s.substr(i+1)}`, 0, s.length-2)) return true;
    // }
    return false;
};

const isPalindrome = (s: string, firstIdx: number, lastIdx: number): boolean=>{
    while (firstIdx <= lastIdx){
        if (s[lastIdx] !== s[firstIdx]) return false;
        lastIdx -= 1;
        firstIdx += 1;
    }
    return true;
}