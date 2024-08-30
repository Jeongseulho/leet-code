/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0, high = nums.length - 1;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        if (mid > 0 && nums[mid] < nums[mid - 1]) {
            high = mid - 1; // 피크는 왼쪽에 있음
        } else if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
            low = mid + 1; // 피크는 오른쪽에 있음
        } else {
            return mid; // 피크 발견
        }
    }

    return -1; // 이론적으로는 실행되지 않음 (입력 배열에는 항상 피크가 존재함)
};
