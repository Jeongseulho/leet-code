/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        if(mid < nums.length - 1 && nums[mid] < nums[mid + 1]) low = mid + 1;
        else high = mid - 1;
    }                   

    return low;
};