/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(hash.hasOwnProperty(nums[i]) && (i - hash[nums[i]]) <= k) return true;
        else hash[nums[i]] = i;
    }

    return false;
};