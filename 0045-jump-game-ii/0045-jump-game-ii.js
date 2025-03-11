/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let cnt = 0;
    let target = nums.length - 1;
    while(target !== 0) {
        let minIdx = Infinity;
        for(let i = target - 1; i > -1; i--) {
            if((i + nums[i]) >= target) {
                minIdx = Math.min(minIdx, i);
            }
        }
        target = minIdx;
        cnt += 1;
    }
    return cnt;
};