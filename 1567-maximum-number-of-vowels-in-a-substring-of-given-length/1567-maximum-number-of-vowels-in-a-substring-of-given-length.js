/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxCnt = 0;
    let curCnt = 0;
    
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            curCnt++;
        }
    }
    maxCnt = curCnt;
    
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            curCnt++;
        }
        if (vowels.has(s[i - k])) {
            curCnt--;
        }
        maxCnt = Math.max(maxCnt, curCnt);
    }
    
    return maxCnt;
};