/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let target = nums.length - 1;

    for(let i = nums.length - 2; i >= 0; i--) {
        const prevMaxIdx = i + nums[i];
        if(prevMaxIdx >= target) target = i;
    }
    
    return target === 0;
};