/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const sum = Array(nums.length + 1).fill(0);
    sum[1] = nums[0];
    for(let i = 2; i < sum.length; i++) {
        sum[i] = sum[i - 1] + nums[i - 1];
    }
    for(let j = 0; j < nums.length; j++) {
        const left = sum[j];
        const right = sum[sum.length -1] - sum[j + 1];
        if(left === right) return j;
    }

    return -1;
};