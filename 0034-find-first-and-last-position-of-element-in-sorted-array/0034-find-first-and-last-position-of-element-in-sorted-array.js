/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let low = 0, high = nums.length - 1;
    let s = -1, e = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (target <= nums[mid]) high = mid - 1;
        else low = mid + 1;
    }

    if (low < nums.length && nums[low] === target) s = low;

    low = 0;
    high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (target >= nums[mid]) low = mid + 1;
        else high = mid - 1;
    }

    if (high >= 0 && nums[high] === target) e = high;

    return [s, e];
};