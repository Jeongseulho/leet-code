/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let [flipCnt, maxConsecutiveCnt, left] = [0, 0, 0];

    for(let right = 0; right < nums.length; right++) {
        if(!nums[right]) flipCnt += 1;
        while(flipCnt > k) {
            if(!nums[left]) flipCnt -= 1;
            left += 1;
        }
        maxConsecutiveCnt = Math.max(maxConsecutiveCnt, right - left + 1);
    }
    return maxConsecutiveCnt;
};