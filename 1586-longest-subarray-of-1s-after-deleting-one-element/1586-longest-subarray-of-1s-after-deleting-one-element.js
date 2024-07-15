/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let [zeroCnt, left, maxSize] = [0, 0, 0];
    for(let right = 0; right < nums.length; right++) {
        if(!nums[right]) zeroCnt += 1;
        while(zeroCnt > 1) {
            if(!nums[left]) zeroCnt -= 1;
            left += 1;
        }
        maxSize = Math.max(maxSize, right - left + 1 - zeroCnt);
    }
    return zeroCnt === 0 ? maxSize - 1 : maxSize;
};