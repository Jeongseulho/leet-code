/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numCnt = {};
    for(const num of nums) {
        numCnt[num] = 1 + (numCnt[num] || 0);
        if(numCnt[num] > (nums.length / 2)) return num;
    }
};