/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLen = nums.length + 1;
    let s = 0;
    let e = 0;
    let sum = 0;
    while(e !== nums.length && s !== nums.length) {
        while(e !== nums.length && sum < target) {
            sum += nums[e];
            e++;
        }
        while(s !== nums.length && sum >= target) {
            sum -= nums[s];
            s++;
        }
        minLen = Math.min(minLen, e - s + 1);
    }

    return minLen === nums.length + 1 ? 0 : minLen;
};