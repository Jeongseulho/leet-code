/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    let left = 0;
    let right = 0;
    let maxLen = 1;

    while(left < s.length && right < s.length + 1) {
        right += 1;
        if((right - left) === new Set(s.substring(left, right)).size) {
            maxLen = Math.max(maxLen, right - left);
        } else {
            while((right - left) !== new Set(s.substring(left, right)).size) {
                left += 1;
            }
        }
    }

    return maxLen;
};