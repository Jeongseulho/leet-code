/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(...nums);

    nums[1] = Math.max(nums[0], nums[1]);
    for(let i = 2; i < nums.length; i++) {
        nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1]);
    }

    return nums.at(-1);
};