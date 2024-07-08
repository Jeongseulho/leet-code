/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }

    let acc = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        acc *= nums[i + 1];
        res[i] *= acc;
    }

    return res;
};
