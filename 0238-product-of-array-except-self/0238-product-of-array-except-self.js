/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const ans = Array(nums.length).fill(1);
    
    for(let i = 1; i < nums.length; i++) {
        ans[i] = nums[i - 1] * ans[i - 1];
    }

    let rightAcc = 1;
    for(let j = nums.length - 2; j > -1; j--) {
        rightAcc *= nums[j + 1];
        ans[j] *= rightAcc;
    }

    return ans;
};