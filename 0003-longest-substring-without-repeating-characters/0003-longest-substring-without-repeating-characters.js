/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let l = 0;
    let r = 0;
    const str = new Set();
    while(l !== s.length && r !== s.length) {
        while(r !== s.length && !str.has(s[r])) {
            str.add(s[r]);
            r += 1;
        }
        maxLen = Math.max(maxLen, str.size);
        const dupleLetter = s[r];
        str.add(dupleLetter);

        while(l !== s.length && s[l] !== dupleLetter) {
            str.delete(s[l]);
            l += 1;
        }
        str.delete(s[l]);
        l += 1;
    }

    return maxLen;
};