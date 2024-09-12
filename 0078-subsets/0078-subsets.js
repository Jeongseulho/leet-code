/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [];

    const getSubset = (subset, idx) => {
        if (idx === nums.length) return ans.push(subset);

        getSubset([...subset, nums[idx]], idx + 1);
        getSubset([...subset], idx + 1);
    };

    getSubset([], 0);

    return ans;
};