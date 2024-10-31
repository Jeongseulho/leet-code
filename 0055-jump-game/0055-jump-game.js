/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let target = nums.length - 1;

    for(let i = nums.length - 2; i > -1; i--) {
        const jumpIdx = i + nums[i];
        if(target <= jumpIdx) target = i;
    }

    return target === 0;
};