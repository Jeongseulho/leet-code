/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const dp = Array(nums.length).fill(Infinity);
    dp[0] = 1;

    for(let i = 0; i < nums.length; i++) {
        let maxStep = nums[i];
        for(let j = 1; j <= maxStep; j++) {
            if(i + j >= nums.length) break;
            dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
        }
    }

    return dp.at(-1) - 1;
};