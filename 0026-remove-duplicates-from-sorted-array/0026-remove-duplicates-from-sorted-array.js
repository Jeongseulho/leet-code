/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            i += 1;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};