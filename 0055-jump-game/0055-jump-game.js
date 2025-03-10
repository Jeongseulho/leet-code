/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) return true;
    let last = nums.length - 1;
    
    while(last !== 0) {
        let jump = 1;
        for(let i = last - 1; i > -1; i--) {
            if(nums[i] >= jump) {
                last = i;
                break;
            }
            jump += 1;
            if(i === 0) return false;
        }
    }
    return true;
};