/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLen = 0;
    const curStr = new Set();

    for(let right = 0; right < s.length; right++) {
        while(curStr.has(s[right])) {
            curStr.delete(s[left]);
            left += 1;
        }
        curStr.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};