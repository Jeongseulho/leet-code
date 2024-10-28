/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const sumCnt = {};
    let sum = 0;
    let cnt = 0;
    sumCnt[0] = 1;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const prevTargetSum = sum - k;
        if(sumCnt[prevTargetSum]) cnt += sumCnt[prevTargetSum];
        if(sumCnt[sum]) sumCnt[sum] += 1;
        else sumCnt[sum] = 1;
    }

    return cnt;
};