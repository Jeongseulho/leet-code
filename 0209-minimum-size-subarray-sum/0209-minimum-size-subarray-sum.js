/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if(nums.reduce((acc, cur) => acc + cur, 0) < target) return 0;
    let left = 0;
    let right = 1;
    let sum = nums[0];
    let minLen = nums.length;

    while(left < nums.length && right < nums.length + 1) {
        if(sum < target) {
            sum += nums[right];
            right += 1;
        } else if(sum > target) {
            minLen = Math.min(minLen, right - left);
            sum -= nums[left];
            left += 1;
        } else {
            minLen = Math.min(minLen, right - left);
            sum += nums[right];
            sum -= nums[left];
            right += 1;
            left += 1;
        }
    }

    return minLen;
};