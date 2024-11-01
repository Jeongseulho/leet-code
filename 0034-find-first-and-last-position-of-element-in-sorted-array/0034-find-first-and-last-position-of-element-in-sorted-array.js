/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if(target <= nums[mid]) high = mid - 1;
        else low = mid + 1;
    }
    const s = low < nums.length && nums[low] === target ? low : -1;

    low = 0
    high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if(nums[mid] <= target) low = mid + 1;
        else high = mid - 1;
    }
    const e = -1 < high && nums[high] === target ? high : -1;

    return [s, e];
};