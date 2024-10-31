/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) return 0;

    let cnt = 0;
    let curEnd = 0;
    let nextEnd = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        nextEnd = Math.max(nextEnd, nums[i] + i);
        
        if (i === curEnd) {
            cnt++;
            curEnd = nextEnd;
        }
    }

    return cnt;
};
