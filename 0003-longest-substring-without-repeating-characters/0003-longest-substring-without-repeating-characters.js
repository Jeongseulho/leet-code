/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let maxLen = 0;
    const curStr = new Set();

    for(let end = 0; end < s.length; end++) {
        while(curStr.has(s[end])) {
            curStr.delete(s[start]);
            start += 1;
        }

        curStr.add(s[end]);
        maxLen = Math.max(end - start + 1, maxLen);
    }

    return maxLen;
};