/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const dp = Array(nums.length).fill(Infinity);
    dp[0] = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j <= nums[i]; j++) {
            const ni = i + j;
            if(ni < nums.length) dp[ni] = Math.min(dp[ni], dp[i] + 1);
        }
    }

    return dp.at(-1);
};