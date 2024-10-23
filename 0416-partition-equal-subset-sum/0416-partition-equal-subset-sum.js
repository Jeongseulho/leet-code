/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const arrSum = nums.reduce((acc, num) => acc + num, 0);
    if (arrSum % 2 !== 0) return false;

    const subsetSum = Math.floor(arrSum / 2);
    const dp = Array.from({ length : subsetSum + 1 }, () => Array(nums.length + 1).fill(false));
    dp[0].fill(true);

    for (let sum = 1; sum <= subsetSum; sum++) {
        for (let numIdx = 1; numIdx <= nums.length; numIdx++) {
            const num = nums[numIdx - 1];
            if (num > sum) {
                dp[sum][numIdx] = dp[sum][numIdx - 1];
            } else {
                dp[sum][numIdx] = dp[sum - num][numIdx - 1] || dp[sum][numIdx - 1];
            }
        }
    }

    return dp[subsetSum][nums.length];
};