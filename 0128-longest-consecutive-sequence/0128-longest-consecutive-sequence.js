/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let maxLen = 0;

    for(const num of nums) {
        if(!numSet.has(num - 1)) {
            let len = 1;
            let start = num;
            while(numSet.has(start + len)) len += 1;
            maxLen = Math.max(maxLen, len);
        }
    }

    return maxLen;
};