/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0, high = nums.length - 1;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
            low = mid + 1; // 피크는 오른쪽에 있음
        } else {
            high = mid - 1; // 피크는 왼쪽에 있음
        }
    }

    return low; // 피크 요소를 가리킴
};