/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let ans = nums[0];

    for(let i = 1; i < nums.length; i++) {
        const num = nums[i];
        curMax = Math.max(min * num, num, max * num);
        curMin = Math.min(min * num, num, max * num);

        max = curMax;
        min = curMin;

        ans = Math.max(curMax, ans);
    }

    return ans;
};