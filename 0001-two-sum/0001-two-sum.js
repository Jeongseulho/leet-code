/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    for(let i = 0; i < nums.length; i++) {
        const num = target - nums[i];
        if(hash.hasOwnProperty(num)) return [hash[num], i];
        hash[nums[i]] = i;
    }
};