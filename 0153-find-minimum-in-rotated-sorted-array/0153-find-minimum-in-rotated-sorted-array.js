/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0, high = nums.length - 1;
    let min = 5001;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        min = Math.min(min, nums[mid]);
        if(nums[low] <= nums[mid]) {
            min = Math.min(min, nums[low]);
            low = mid + 1;
        } else high = mid - 1;
    }

    return min;
};