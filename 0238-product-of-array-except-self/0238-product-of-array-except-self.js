/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const ans = Array(nums.length).fill(1);

    for(let i = 1; i < nums.length; i++) {
        ans[i] = nums[i - 1] * ans[i - 1];
    }

    let acc = 1;
    for(let i = nums.length - 2; i > -1; i--) {
        acc *= nums[i + 1];
        ans[i] *= acc
    }

    return ans;
};