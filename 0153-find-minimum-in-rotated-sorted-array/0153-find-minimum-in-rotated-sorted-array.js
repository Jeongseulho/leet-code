/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0, high = nums.length - 1;
    let min = 5001;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        if(nums[mid] < nums[high]) {
            min = Math.min(min, nums[mid]);
            high = mid - 1;
        }
        else {
            min = Math.min(min, nums[low]);
            low = mid + 1;
        }
    }
    
    return min;
};