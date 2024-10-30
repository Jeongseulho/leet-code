/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const dp1 = Array(nums.length).fill(0);
    dp1[0] = nums[0];

    const dp2 = Array(nums.length).fill(0);
    dp2[nums.length - 1] = nums[nums.length - 1];

    for(let i = 1; i < nums.length; i++) {
        dp1[i] = dp1[i - 1] * nums[i];
    }

    for(let i = nums.length - 2; i > -1; i--) {
        dp2[i] = dp2[i + 1] * nums[i];
    }

    const ans = Array(nums.length).fill(0);
    ans[0] = dp2[1];
    ans[nums.length - 1] = dp1[nums.length - 2]
    for(let i = 1; i < nums.length - 1; i++) {
        ans[i] = dp1[i - 1] * dp2[i + 1];
    }

    return ans;
};